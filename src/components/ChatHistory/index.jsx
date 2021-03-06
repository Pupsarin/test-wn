import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	overflow-y: auto;
	width: 100%;
	height: calc(100% - 120px);
`;

const Message = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2rem;
	background-color: rgba(242, 250, 255, 0.7);
	border-radius: 5px;
	padding: 0.5rem;
	min-width: 10%;
	margin-bottom: 0.5rem;
	${({ right, center }) => {
		if (right) {
			return `
				align-self: flex-end;
				align-items: flex-end;
			`;
		}
		if (center) {
			return `
				align-self: center;
				justify-content: center;
			`;
		}
		return 'align-self: flex-start';
	}};
`;

Message.Body = styled.p`
	margin: 0;
	word-wrap: break-word;
	word-break: break-all;
	overflow-wrap: break-word;
`;

const Div = styled.div`
	font-size: 0.7em;
	font-weight: bold;
`;

const Time = styled.div`
	font-size: 0.5em;
`;

export const ChatHistory = (props) => {
	const { currentUser } = props;
	const messages = useSelector((state) => state.messages);

	const ref = useRef();

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTo(0, ref.current.scrollHeight);
		}
	}, [messages]);

	return (
		<Container ref={ref}>
			{messages.map((m) => {
				const isCurrent = m.user === currentUser;
				const isAdmin = m.user === 'admin';

				return (
					<Message key={m.message + m.createdAt.getTime()} right={isCurrent} center={isAdmin}>
						{!isAdmin && !isCurrent && <Div>User {m.user}</Div>}
						{!isAdmin && <Time>{m.createdAt.toLocaleString()}</Time>}
						<Message.Body>{m.message}</Message.Body>
					</Message>
				);
			})}
		</Container>
	);
};

ChatHistory.propTypes = {
	currentUser: PropTypes.number.isRequired,
};

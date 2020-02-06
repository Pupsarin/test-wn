import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Icon, IconButton } from 'rsuite';
import styled from 'styled-components';
import { removeUser } from '../../redux/actions';
import { palette } from '../../shared/style';
import { ChatInput } from '../../containers';
import { ChatHistory } from '../ChatHistory';

const Card = styled.div`
	width: 400px;
	height: 568px;
	border-radius: 6px;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
	position: relative;
	overflow: hidden;
	margin: 0.5rem;
`;

Card.Header = styled.h4`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	font-size: 2rem;
	font-weight: bold;
	padding: 0.5rem 1rem;
	background-color: ${({ user }) => {
		if (user < palette.length) {
			return palette[user];
		}
		return palette[Math.floor(Math.random() * palette.length)];
	}};
	color: #ffffff;
`;

Card.Content = styled.div`
	padding: 1rem;
	width: 100%;
	height: 100%;
`;

const InputContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const ChatView = (props) => {
	const { user, usersCount } = props;
	const dispatch = useDispatch();

	const handleUserRemoval = () => {
		dispatch(removeUser(user));
	};

	return (
		<Card>
			<Card.Header user={user}>
				User {user}
				{usersCount > 2 && <IconButton onClick={handleUserRemoval} size="xs" icon={<Icon icon="close" />} />}
			</Card.Header>
			<Card.Content>
				<ChatHistory currentUser={user} />
				<InputContainer>
					<ChatInput user={user} />
				</InputContainer>
			</Card.Content>
		</Card>
	);
};

ChatView.propTypes = {
	user: PropTypes.number.isRequired,
	usersCount: PropTypes.number.isRequired,
};

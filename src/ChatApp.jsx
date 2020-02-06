import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header, Nav, Navbar, Icon } from 'rsuite';
import styled from 'styled-components';
import { ChatView } from './components';
import { addUser, newUserMessage } from './redux/actions';
import 'rsuite/dist/styles/rsuite-default.css';

const H1 = styled.h1`
	font-size: 3rem;
	line-height: 2em;
	margin-left: 1rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 1rem;
`;

export const ChatApp = () => {
	const { users, userCounter } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const handleAddUser = () => {
		dispatch(addUser());
		dispatch(newUserMessage(userCounter));
	};

	return (
		<Container>
			<Header>
				<Navbar appearance="inverse">
					<Navbar.Header>
						<H1 className="navbar-brand logo">Home Test</H1>
					</Navbar.Header>
					<Navbar.Body>
						<Nav pullRight onClick={handleAddUser}>
							<Nav.Item icon={<Icon icon="plus" />}>Create New User</Nav.Item>
						</Nav>
					</Navbar.Body>
				</Navbar>
			</Header>
			<Content>
				{users.map((usr) => (
					<ChatView key={usr} user={usr} usersCount={users.length} />
				))}
			</Content>
		</Container>
	);
};

import { ADD_USER, NEW_USER_MESSAGE, REMOVE_USER, SEND_MESSAGE } from './actionTypes';

export const addUser = () => ({
	type: ADD_USER,
});

export const removeUser = (newUserList) => ({
	type: REMOVE_USER,
	payload: newUserList,
});

export const sendMessage = (content) => ({
	type: SEND_MESSAGE,
	payload: content,
});

export const newUserMessage = (newUser) => ({
	type: NEW_USER_MESSAGE,
	payload: {
		user: 'admin',
		message: `User ${newUser} joined the chat`,
		createdAt: new Date(),
	},
});

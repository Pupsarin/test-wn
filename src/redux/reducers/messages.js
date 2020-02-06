import { SEND_MESSAGE, NEW_USER_MESSAGE } from '../actionTypes';

const initialState = [];

export const messages = (state = initialState, action) => {
	switch (action.type) {
		case NEW_USER_MESSAGE:
		case SEND_MESSAGE: {
			const { user, message } = action.payload;
			return [...state, { user, message, createdAt: new Date() }];
		}
		default:
			return state;
	}
};

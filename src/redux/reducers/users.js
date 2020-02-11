import { ADD_USER, REMOVE_USER } from '../actionTypes';

const initialState = {
	users: [1, 2],
	userCounter: 3,
};

export const users = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER: {
			return {
				users: [...state.users, state.userCounter],
				userCounter: state.userCounter + 1,
			};
		}
		case REMOVE_USER: {
			return {
				...state,
				users: [...action.payload],
			};
		}
		default:
			return state;
	}
};

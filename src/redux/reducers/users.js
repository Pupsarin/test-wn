import { ADD_USER, REMOVE_USER } from '../actionTypes';

const initialState = {
	users: [1, 2, 3],
	userCounter: 4,
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
			const { userToRemove } = action.payload;
			return {
				...state,
				users: state.users.filter((usr) => usr !== userToRemove),
			};
		}
		default:
			return state;
	}
};

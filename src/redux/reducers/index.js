import { combineReducers } from 'redux';
import { users } from './users';
import { messages } from './messages';

export const rootReducer = combineReducers({ users, messages });

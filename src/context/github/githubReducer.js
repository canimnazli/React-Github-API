import {
	SEARCH_USERS,
	SET_LOADING,
	GET_REPOS,
	GET_USER,
	CLEAR_USERS,
} from '../types';

export default (state, action) => {
	if (action.type === SEARCH_USERS) {
		return {
			...state,
			users: action.payload,
			loading: false,
		};
	}
	if (action.type === GET_USER) {
		return {
			...state,
			user: action.payload,
			loading: false,
		};
	}
	if (action.type === GET_REPOS) {
		return {
			...state,
			repos: action.payload,
			loading: false,
		};
	}
	if (action.type === CLEAR_USERS) {
		return {
			...state,
			users: [],
			loading: false,
		};
	}
	if (action.type === SET_LOADING) {
		return {
			...state,
			loading: true,
		};
	} else return state;
};

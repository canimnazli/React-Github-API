import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
	if (action.type === SET_ALERT) {
		return action.payload;
	}
	if (action.type === REMOVE_ALERT) {
		return null;
	} else return state;
};

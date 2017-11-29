import ActionTypes from "../constants/action_types";

export function authReducer(state = {}, action) {
	switch (action.type) {
		case ActionTypes.isSignedIn: {
			return Object.assign({}, state, {
				isAuthenticated: true
			})
		}
		case ActionTypes.isSignedOut: {
			return Object.assign({}, state, {
				isAuthenticated: false
			})
		}
		default:
			return state;
	}
}
 
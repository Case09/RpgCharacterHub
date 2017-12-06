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
		case ActionTypes.loginSuccess: {
			return Object.assign({}, state, {
				user: action.user,
				errorMessage: ""
			})
		}
		case ActionTypes.loginFailed: {
			return Object.assign({}, state, {
				user: null,
				errorMessage: action.errorMessage
			})
		}
		case ActionTypes.registerSuccess: {
			return Object.assign({}, state, {
				isAuthenticated: true,
				user: action.user,
				errorMessage: ""
			})
		}
		case ActionTypes.registerFailed: {
			return Object.assign({}, state, {
				user: null,
				errorMessage: action.errorMessage
			})
		}
		default:
			return state;
	}
}
 
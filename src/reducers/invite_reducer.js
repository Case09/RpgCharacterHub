import ActionTypes from "../constants/action_types";

export function inviteReducer(state = {}, action) {
	switch (action.type) {
		case ActionTypes.GetInviteRequested: {
			return Object.assign({}, state, {
				inProgress: true,
				error: "",
				success: ""
			});
		}
		case ActionTypes.GetInviteRejected: {
			return Object.assign({}, state, {
				inProgress: false,
				error: "Error in getting invite."
			});
		}
		case ActionTypes.GetInviteFulfilled: {
			const { host, agenda, guests } = action.invite;
			const newState = Object.assign({}, state, {
				inProgress: false,
				success: "Got invite.",
				host,
				agenda
			});
			newState.guests = [];
			if (guests) {
				newState.guests = Object.keys(guests).map(k => guests[k]);
			}
			return newState;
		}
		default:
			return state;
	}
}

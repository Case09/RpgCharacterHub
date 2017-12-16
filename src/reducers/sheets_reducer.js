import ActionTypes from "../constants/action_types";

export function sheetsReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.createSheetSuccess:
            return Object.assign({}, state, {
                error: ""
            });
        case ActionTypes.createSheetFailed:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
			return state;
    }
}
import ActionTypes from "../constants/action_types";

export function sheetsReducer(state = {}, action) {
    switch(action.type) {
        case ActionTypes.createSheetSuccess:
            return Object.assign({}, state, {
                sheet: action.sheet
            });
        case ActionTypes.createSheetFailed:
            return Object.assign({}, state, {
                sheet: "no sheet"
            });
        default:
			return state;
    }
}
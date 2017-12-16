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
        case ActionTypes.getLatestSheetsSuccess:
            return Object.assign({}, state, {
                latestSheets: ActionTypes.sheets
            })
        case ActionTypes.getLatestSheetsFailed:
            return Object.assign({}, state, {
                error: ActionTypes.error
            })
        default:
			return state;
    }
}
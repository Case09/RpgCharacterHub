import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { create } from '../helpers/sheets';

// const data = {
//     sheets: {
//         sheetGuid: {
//             creator: 'user1',
//             isPrivate: false,
//             data: {...data}
//         }
//     },
//     favorites: {
//         user1: {
//             sheets: [
//                 sheetData1, sheetData2
//             ]
//         }
//     }
// }

export function createSheet(uid, data) {
    return dispatch => {
        create(uid, data)
            .then(resp => createSheetSuccess(resp))
            .catch(error => createSheetFailed())
    }
}

function createSheetSuccess(sheet) {
    return {
        type: ActionTypes.createSheetSuccess,
        sheet
    }
}

function createSheetFailed() {
    return {
        type: ActionTypes.createSheetFailed
    }
}
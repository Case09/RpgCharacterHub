import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { create } from '../helpers/sheets';

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
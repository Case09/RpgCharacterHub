import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { create } from '../helpers/sheets';

export function createSheet(data) {
    return dispatch => {
        create(data)
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
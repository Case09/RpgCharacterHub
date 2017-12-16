import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { create, saveSheetData, savePublicSheet } from '../helpers/sheets';

export function createSheet(data) {
    // Taking the ref of /sheetsData collection, so it can be passed to promise chain
    const sheetsDataRef = database.ref(`/sheetsData`).push();
    return dispatch => {
        create(data, sheetsDataRef)
            .then(() => {
                return saveSheetData(data, sheetsDataRef);
            })
            .then(() => {
                return savePublicSheet(data, sheetsDataRef);
            })
            .then(() => {
                return dispatch(createSheetSuccess());
            })
            .catch((error) => {
                return dispatch(createSheetFailed(error));
            })
    }
}

function createSheetSuccess() {
    return {
        type: ActionTypes.createSheetSuccess
    }
}

function createSheetFailed(error) {
    return {
        type: ActionTypes.createSheetFailed,
        error
    }
}
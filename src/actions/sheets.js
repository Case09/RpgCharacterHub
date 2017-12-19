import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { 
    create, 
    saveSheetData, 
    savePublicSheet, 
    getLatestSheetsRef, 
    getLatestSheetIds, 
    getLatestSheetData
} from '../helpers/sheets';

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

export function getLatestSheets() {
    return dispatch => {
        getLatestSheetsRef()
            .then((sheetsRef) => {
                return getLatestSheetIds(sheetsRef);
            })
            .then((ids) => {
                return dispatch(getLatestSheetData(ids, databaseRef))
            })
            .then((sheets) => {
                return dispatch(getLatestSheetsSuccess(sheets))
            })
            .catch((error) => {
                return dispatch(getLatestSheetsFailed(error))
            })
    }
}

function createSheetSuccess(sheets) {
    return {
        type: ActionTypes.createSheetSuccess,
        sheets
    }
}

function createSheetFailed(error) {
    return {
        type: ActionTypes.createSheetFailed,
        error
    }
}

function getLatestSheetsSuccess(sheets) {
    return {
        type: ActionTypes.getLatestSheetsSuccess,
        sheets
    }
}

function getLatestSheetsFailed(error) {
    return {
        type: ActionTypes.getLatestSheetsFailed,
        error
    }
}
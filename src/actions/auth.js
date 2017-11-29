import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';

export function checkAuth() {
    return dispatch => {
        firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(signedInAction())
            } else {
                dispatch(signedOutAction())
            }
        })
    }
}

function signedInAction() {
    return {
        type: ActionTypes.isSignedIn
    }
}

function signedOutAction() {
    return {
        type: ActionTypes.isSignedOut
    }
}
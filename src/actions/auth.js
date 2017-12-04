import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { login } from '../helpers/auth';

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

export function signIn(username, password) {
    return dispatch => {
        login(username, password)
            .then(resp => {
                return dispatch(loginSuccessAction(resp));
            })
            .catch(error => {
                return dispatch(loginFailedAction());
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

function loginSuccessAction(user) {
    return {
        type: ActionTypes.loginSuccess,
        user
    }
}

function loginFailedAction() {
    return {
        type: ActionTypes.loginFailed
    }
}
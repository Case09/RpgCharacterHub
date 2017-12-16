import ActionTypes from '../constants/action_types';
import { database, firebaseAuth } from '../config/database';
import { login, logout, createUser, saveUser } from '../helpers/auth';

export function checkAuth() {
    return dispatch => {
        firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(signedInAction(user))
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
                return dispatch(loginFailedAction(error.message))
            })
    }
}

export function signOut() {
    return dispatch => {
        logout()
    }
}

export function signUp(username, password, displayName) {
    return dispatch => {
        createUser(username, password)
            .then(user => {
                // Save User Name or displayName
                return user.updateProfile({displayName})
            })
            .then(() => {
                // Save user info to /users collection
                return saveUser()
            })
            .then(() => {
                dispatch(registerSuccessAction())
            })
            .catch(error => {
                return dispatch(registerFailedAction(error.message))
            })
    }
}

function signedInAction(user) {
    return {
        type: ActionTypes.isSignedIn,
        user
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

function loginFailedAction(errorMessage) {
    return {
        type: ActionTypes.loginFailed,
        errorMessage
    }
}

function registerSuccessAction(user) {
    const currentUser = firebaseAuth().currentUser;
    return {
        type: ActionTypes.registerSuccess,
        user: currentUser
    }
}

function registerFailedAction(errorMessage) {
    return {
        type: ActionTypes.registerFailed,
        errorMessage
    }
}
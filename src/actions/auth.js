import ActionTypes from '../constants/action_types';
import database from '../config/database';

export function isAuthenticated() {
    return dispatch => {
        database.on('value', (snapshot) => {
            dispatch(action_types.isAuthenticated)
        })
    }
}
import { combineReducers } from 'redux';
import { authReducer } from './auth_reducer';
import { sheetsReducer } from './sheets_reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    sheets: sheetsReducer
});

export default rootReducer;
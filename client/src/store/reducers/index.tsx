import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import searchReducer from './searchReducer';
import alertReducer from './alertReducer';

export default combineReducers({
    search: searchReducer,
    alert: alertReducer,
    form: formReducer,
});

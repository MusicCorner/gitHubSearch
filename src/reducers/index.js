import { combineReducers } from 'redux';
import commonReducer from './common/common';

const reducers = combineReducers({
	common: commonReducer,
});

export default reducers;

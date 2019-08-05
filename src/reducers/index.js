import { combineReducers } from 'redux';
import commonReducer from './common/common';
import searchReducer from './search/search';

const reducers = combineReducers({
	common: commonReducer,
	search: searchReducer,
});

export default reducers;

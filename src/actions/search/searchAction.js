import { SEARCH_ACTIONS } from '../../constants/actions/search';

export const changeSearchInputValue = (payload) => ({
	type: SEARCH_ACTIONS.ON_SEARCH_CHANGE,
	payload,
});

export const fetchSearchRequest = (payload) => ({
	type: SEARCH_ACTIONS.FETCH_SEARCH_REQUEST,
	payload,
});

export const fetchSearchSuccess = (payload) => ({
	type: SEARCH_ACTIONS.FETCH_SEARCH_FULFILLED,
	payload,
});

export const clearSearchResults = () => ({
	type: SEARCH_ACTIONS.CLEAR_SEARCH_RESULTS,
});

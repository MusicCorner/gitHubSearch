// @flow

import { SEARCH_ACTIONS } from '../../constants/actions/search';
import Action from '../../types/reduxDefaultTypes';

type Input = { value: ?String | '' };
type Results = {
	isPending: boolean,
	data: { [key: any]: any },
};
type State = {
	input: Input,
	results: Results,
};

const initialState = {
	input: {
		value: '',
	},
	results: {
		isPending: false,
		data: {},
	},
};

const searchReducer = (state: State = initialState, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case SEARCH_ACTIONS.ON_SEARCH_CHANGE:
			return Object.assign({}, state, {
				input: {
					...state.input,
					value: payload,
				},
			});

		case SEARCH_ACTIONS.FETCH_SEARCH_REQUEST:
			return Object.assign({}, state, {
				results: {
					...state.results,
					isPending: true,
				},
			});

		case SEARCH_ACTIONS.FETCH_SEARCH_FULFILLED:
			return Object.assign({}, state, {
				results: {
					...state.results,
					data: payload,
					isPending: false,
				},
			});

		case SEARCH_ACTIONS.CLEAR_SEARCH_RESULTS:
			return initialState;

		default:
			return state;
	}
};

export default searchReducer;

import { SEARCH_ACTIONS } from '../../constants/actions/search';

const initialState = {
	input: {
		value: '',
	},
	results: {
		isPending: false,
		data: {},
	},
};

const searchReducer = (state = initialState, action) => {
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
		default:
			return state;
	}
};

export default searchReducer;

// @flow

import { COMMON_ACTIONS } from '../../constants/actions/common';
import Action from '../../types/reduxDefaultTypes';

type State = {
	error: ?String,
};

const initialState = {
	error: null,
};

const commonReducer = (state: State = initialState, action: Action) => {
	const { type, payload } = action;

	switch (type) {
		case COMMON_ACTIONS.TOGGLE_DEFAULT_ERROR:
			if (payload && payload.message && payload.message.token) {
				localStorage.removeItem('token');
			}

			return Object.assign({}, state, {
				error: payload,
			});

		default:
			return state;
	}
};

export default commonReducer;

import { COMMON_ACTIONS } from '../../constants/actions/common';

const initialState = {
	error: null,
};

const commonReducer = (state = initialState, action) => {
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

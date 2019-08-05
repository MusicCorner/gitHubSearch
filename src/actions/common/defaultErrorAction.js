import { COMMON_ACTIONS } from '../../constants/actions/common';

export const defaultErrorAction = (payload) => {
	return {
		type: COMMON_ACTIONS.TOGGLE_DEFAULT_ERROR,
		payload,
	};
};

import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { MainApi } from '../api/MainApi';
import { defaultErrorAction } from '../actions/common/defaultErrorAction';
import { SEARCH_ACTIONS } from '../constants/actions/search';
import { fetchSearchSuccess } from '../actions/search/searchAction';

function* fetchSearch({ payload }) {
	yield delay(450);

	try {
		const searchResults = yield call(MainApi.fetchSearchResults, payload);
		if (searchResults.errors) {
			yield put(defaultErrorAction(searchResults));
		} else {
			yield put(fetchSearchSuccess(searchResults));
		}
	} catch (error) {
		yield put(defaultErrorAction(error));
	}
}

function* mainSagas() {
	yield takeLatest(SEARCH_ACTIONS.FETCH_SEARCH_REQUEST, fetchSearch);
}

export default mainSagas;

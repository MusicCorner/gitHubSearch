import { call, put, takeEvery } from 'redux-saga/effects';
import { MainApi } from '../api/MainApi';
import { defaultErrorAction } from '../actions/common/defaultErrorAction';

function* fetchSomething() {
	try {
		const something = yield call(MainApi.fetchSomething);
		yield put(defaultErrorAction(something));
	} catch (error) {
		yield put(defaultErrorAction(error));
	}
}

function* mainSagas() {
	yield takeEvery('ACTION_NAME_STATUS', fetchSomething);
}

export default mainSagas;

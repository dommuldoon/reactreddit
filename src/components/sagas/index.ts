import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import {
	REQUEST_API_DATA,
	receiveApiData,
	REQUEST_SUBREDDIT,
	receiveSubreddit,
	requestApiDataAction,
	requestSubredditAction,
} from '../actions';
import { fetchData } from '../api';

function* getRepos(action: requestApiDataAction) {
	yield delay(400);
	try {
		// do api call
		const data = yield call(fetchData, action.q);
		yield put(receiveApiData(data.subreddits));
	} catch (e) {
		console.log(e);
	}
}

export function* mySaga() {
	console.log('take latest');
	yield takeLatest(REQUEST_API_DATA, getRepos);
}

function* getSubreddit(action: requestSubredditAction) {
	try {
		// do api call
		const data = yield call(fetchData, action.q);
		yield put(receiveSubreddit(data.data));
	} catch (e) {
		console.log(e);
	}
}

export function* mySaga2() {
	console.log('take latest2');
	yield takeLatest(REQUEST_SUBREDDIT, getSubreddit);
}

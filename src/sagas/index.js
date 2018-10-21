import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';


function* mySaga() {
    yield takeLatest(types.LOAD_ARTICLES_REQUEST, articleWorkerSaga);
}

function fetchArticles() {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts"
    });
}

function* articleWorkerSaga() {
    try {
        const response = yield call(fetchArticles);
        const articles = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: types.LOAD_ARTICLES_SUCCESS, articles });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.LOAD_ARTICLES_FAILURE, error });
    }
}

export default mySaga;
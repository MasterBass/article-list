import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';


function* mySaga() {
    yield takeLatest(types.LOAD_ARTICLES_REQUEST, articleWorkerSaga);
    yield takeLatest(types.LOAD_ARTICLES_REQUEST, userWorkerSaga);
}

function fetchArticles() {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/posts"
    });
}

function fetchUsers() {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
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

function* userWorkerSaga() {
    try {
        const response = yield call(fetchUsers);
        const users = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: types.LOAD_USERS_SUCCESS, users });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.LOAD_USERS_FAILURE, error });
    }
}

export default mySaga;
import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import axios from 'axios';


function* mySaga() {
    yield takeLatest(types.LOAD_ARTICLES_REQUEST, articleWorkerSaga);
    yield takeLatest(types.LOAD_USERS_REQUEST, userWorkerSaga);
    yield takeLatest(types.LOAD_COMMENTS_REQUEST, commentWorkerSaga);
    yield takeLatest(types.CREATE_COMMENT_REQUEST, commentCreateWorkerSaga);
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

function fetchComments(action) {
    return axios({
       method: "get",
       url: `https://jsonplaceholder.typicode.com/comments?postId=${action.articleId}`
    });
}

function* commentWorkerSaga(action) {
    try {
        const response = yield call(fetchComments, action);
        const comments = response.data;
        // dispatch a success action to the store with the new dog
        yield put({ type: types.LOAD_COMMENTS_SUCCESS, comments });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.LOAD_COMMENTS_FAILURE, error });
    }
}

function* commentCreateWorkerSaga(action) {
    const comment = Object.assign({}, action.comment);
    yield put({type: types.CREATE_COMMENT_SUCCESS, comment });
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
import * as types from './actionTypes';

export function loadArticlesSuccess(articles) {
    return { type: types.LOAD_ARTICLES_SUCCESS, articles };
}
import * as types from './actionTypes';

export function createCommentSuccess(comment) {
    return {type: types.CREATE_COMMENT_SUCCESS, comment}
}

export function loadCommentsRequst(articleId) {
    return { type: types.LOAD_COMMENTS_REQUEST, articleId };
}
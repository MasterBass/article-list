import * as types from './actionTypes';

export function createCommentRequest(comment) {
    return {type: types.CREATE_COMMENT_REQUEST, comment}
}

export function loadCommentsRequst(articleId) {
    return { type: types.LOAD_COMMENTS_REQUEST, articleId };
}
import * as types from './actionTypes';

export function createCommentSuccess(comment) {
    return {type: types.CREATE_COMMENT_SUCCESS, comment}
}
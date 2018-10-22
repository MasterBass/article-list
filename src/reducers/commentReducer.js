import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleReducer(state=initialState.comments, action) {
    switch (action.type) {
        case types.CREATE_COMMENT_SUCCESS:
            return [...state,
                Object.assign({}, action.comment)
            ];

        case types.LOAD_COMMENTS_SUCCESS:
            return action.comments;


        default:
            return state;
    }
}
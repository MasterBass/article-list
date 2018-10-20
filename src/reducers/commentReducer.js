import * as types from '../actions/actionTypes';

export default function articleReducer(state=[], action) {
    switch (action.type) {
        case types.CREATE_COMMENT_SUCCESS:
            return [...state,
                Object.assign({}, action.comment)
            ];

        default:
            return state;
    }
}
import * as types from '../actions/actionTypes';

export default function articleReducer(state=[], action) {
    switch (action.type) {
        case types.LOAD_ARTICLES_SUCCESS:
            return {};

        default:
            return state;
    }
}
import {combineReducers} from 'redux';
import articles from './articleReducer';
import comments from './commentReducer';
import users from './userReducer';

const rootReducer = combineReducers({
    articles,
    users,
    comments
});

export default rootReducer;
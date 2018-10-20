import {combineReducers} from 'redux';
import articles from './articleReducer';
import comments from './commentReducer';

const rootReducer = combineReducers({
   articles,
   comments
});

export default rootReducer;
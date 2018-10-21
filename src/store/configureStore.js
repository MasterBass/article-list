import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';



export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            reduxImmutableStateInvariant(),
            sagaMiddleware
        )

    );
    sagaMiddleware.run(mySaga);
    return store;
}
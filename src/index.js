import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {loadArticlesRequst} from "./actions/articleActions";
import {loadUsersRequst} from "./actions/userActions";
import {PersistGate} from 'redux-persist/integration/react'

const {store, persistor} = configureStore();
store.dispatch(loadArticlesRequst());
store.dispatch(loadUsersRequst());

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

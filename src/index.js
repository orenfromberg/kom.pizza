import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { RouterToUrlQuery } from 'react-url-query';
import App from './App';
import reducer from './Reducers'
import './index.css';

import { persistStore, autoRehydrate } from 'redux-persist';
import { setIsReady } from './Actions/index';

const store = createStore(
    reducer,
    {
        token: process.env.REACT_APP_AUTH_TOKEN
    },
    compose(
        applyMiddleware(ReduxThunk, ReduxPromise),
        autoRehydrate({
            // log: true
        })
    )
);

persistStore(store, { blacklist: ['isReady']}, () => {
    store.dispatch(setIsReady());
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RouterToUrlQuery>
                <App />
            </RouterToUrlQuery>
        </Router>
    </Provider>,
    document.getElementById('root')
);
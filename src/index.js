import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { RouterToUrlQuery } from 'react-url-query';
import App from './App';
import reducers from './Reducers'
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <RouterToUrlQuery>
                <App />
            </RouterToUrlQuery>
        </Router>
    </Provider>,
    document.getElementById('root')
);
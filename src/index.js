import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import { RouterToUrlQuery } from 'react-url-query';

import rootReducer from './state/rootReducer';
import App from './App';

const store = createStore(rootReducer);

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
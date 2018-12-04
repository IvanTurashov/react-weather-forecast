/**
 * Created by ivan on 03.06.18.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App.jsx';
import createStore from './store/store';

const store = createStore();

ReactDom.render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('app'));
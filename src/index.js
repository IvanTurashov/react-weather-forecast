/**
 * Created by ivan on 03.06.18.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import createStore from './store/store';

const store = createStore();

ReactDom.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
    document.getElementById('app'));
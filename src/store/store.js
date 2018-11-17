import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import weatherListReducer from './reducers/weatherList';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    weatherList: weatherListReducer
});

export default (initialState = {}) => {
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
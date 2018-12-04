import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import weatherListReducer from './reducers/weatherList';
import citiesReducer from './reducers/cities';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    weatherList: weatherListReducer,
    cities: citiesReducer
});

export default (initialState = {}) => {
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
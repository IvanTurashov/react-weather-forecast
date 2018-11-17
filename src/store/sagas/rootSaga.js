import { all, fork } from 'redux-saga/effects';

import fetchWeatherListWatcher from './weatherList';

export default function* rootSaga() {
    yield all([
        fork(fetchWeatherListWatcher)
    ]);
}
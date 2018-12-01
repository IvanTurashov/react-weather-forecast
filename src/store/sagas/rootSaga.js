import { all, fork } from 'redux-saga/effects';

import fetchWeatherListWatcher from './weatherList';
import fetchCitiesWatcher from './cities';

export default function* rootSaga() {
    yield all([
        fork(fetchWeatherListWatcher),
        fork(fetchCitiesWatcher)
    ]);
}
import { put, call, take, takeLatest, cancel, cancelled } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSuccess, fetchFailed } from '../actions/cities';
import WeatherService from '../../services/WeatherService';

const fetchCities = function* (action) {
    const cancelSource = axios.CancelToken.source();
    const token = cancelSource.token;

    try {
        const { data } = yield call(WeatherService.findCities, action.data, token);
        yield put(fetchSuccess(data));
    } catch (e) {
        yield put(fetchFailed(e));
    } finally {
        if (yield cancelled()) {
            yield call(cancelSource.cancel);
        }
    }
};

const fetchCitiesWatcher = function* () {
    while (true) {
        const task = yield takeLatest('FETCH_CITIES', fetchCities);
        yield take('CANCEL_FETCH_CITIES');
        yield cancel(task);
    }
};

export default fetchCitiesWatcher;
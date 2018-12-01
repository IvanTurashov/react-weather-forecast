/**
 * Created by ivan on 24.06.18.
 */

import axios from 'axios';
import moment from 'moment';
import API from './API';

const APP_ID = '093c63d1d6dd2f0f77c6f14d91a19042';

const getDataByLatLng = (requestParams, cancelToken) => {
    const params = {
        cnt: 10,
        appid: APP_ID,
        ...requestParams
    };

    return axios.get(API.forecastDaily, {
        params,
        cancelToken,
        transformResponse: (data) => {
            let { city, list } = JSON.parse(data);

            list = list.map(day => {
                return {
                    date: day.dt,
                    humidity: day.humidity,
                    speed: day.speed,
                    temp: day.temp,
                    main: {
                        icon: day.weather[0].icon,
                        description: day.weather[0].description
                    }
                };
            });

            return { city, list };
        }
    });
};

const getCitiesByQuery = (q, cancelToken) => {
    const params = {
        q,
        cnt: 10,
        appid: APP_ID
    };

    return axios.get(API.find, {
        params,
        cancelToken
    });
};

class WeatherService {
    static getWeatherByPosition(params, cancelToken) {
        return getDataByLatLng(params, cancelToken);
    }

    static findCities(q, cancelToken) {
        return getCitiesByQuery(q, cancelToken);
    }

    static prepareDataChart(list) {
        const datasetDay = {
            label: 'Day',
            backgroundColor: "rgba(0, 0, 0, 0)",
            lineTension: 0,
            borderColor: "rgba(146, 206, 168, 1)",
            pointBackgroundColor: "rgba(146, 206, 168, 1)",
            data: []
        };
        const datasetNight = {
            label: 'Night',
            backgroundColor: "rgba(0, 0, 0, 0)",
            lineTension: 0,
            borderColor: "rgba(85, 206, 168, 1)",
            pointBackgroundColor: "rgba(85, 206, 168, 1)",
            data: []
        };
        const labels = [];

        for (let i = 0; i < list.length; i++) {
            const day = list[i];

            labels.push(day.date);
            datasetDay.data.push(day.temp.day);
            datasetNight.data.push(day.temp.night);
        }

        return { labels, datasets: [datasetDay, datasetNight] };
    }
}

export default WeatherService;
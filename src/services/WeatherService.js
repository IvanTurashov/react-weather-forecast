/**
 * Created by ivan on 24.06.18.
 */

import axios from 'axios';

const APP_ID = '093c63d1d6dd2f0f77c6f14d91a19042';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';

const getDataByLatLng = ({ lat, lng }, cancelToken) => {
    const params = {
        lat: lat,
        lon: lng,
        cnt: 10,
        appid: APP_ID
    };

    return axios.get(BASE_URL, {
        params,
        cancelToken,
        transformResponse: (data) => {
            let { city, list } = JSON.parse(data);

            list = list.map(day => {
                return {
                    date: day.dt,
                    humidity: day.humidity,
                    speed: day.speed,
                    temp: {
                        max: day.temp.max,
                        min: day.temp.min
                    },
                    main: {
                        icon: day.weather[0].icon,
                        description: day.weather[0].description
                    }
                };
            });

            return { city, list };
        }
    })
};

class WeatherService {
    static getWeatherByPosition(obj, cancelToken) {
        return getDataByLatLng(obj, cancelToken);
    }
}

export default WeatherService;
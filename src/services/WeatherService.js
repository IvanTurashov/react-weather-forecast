/**
 * Created by ivan on 24.06.18.
 */

import axios from 'axios';

const APPID = '093c63d1d6dd2f0f77c6f14d91a19042',
    BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

const getDataByLatLng = ({lat, lng}, cancelToken) => {
    const params = {
        lat: lat,
        lon: lng,
        cnt: 10,
        appid: APPID
    };

    return new Promise((resolve, reject) => {
        axios
            .get(BASE_URL, {params, cancelToken})
            .then(response => {
                const list = response.data.list.map(day => {
                    return {
                        date: new Date(day.dt * 1000),
                        temp: {
                            day: day.temp.day,
                            night: day.temp.night
                        },
                        icon: day.weather[0].icon
                    };
                });

                resolve(list);
            })
            .catch(reject)
    });
};

class WeatherService {
    static getWeatherByPosition(latlng, cancelToken) {
        return getDataByLatLng(latlng, cancelToken);
    }
}

export { WeatherService };
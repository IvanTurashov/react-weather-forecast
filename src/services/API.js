class API {
    static get base() {
        return 'https://api.openweathermap.org/data/2.5';
    }

    static get find() {
        return `${API.base}/find`;
    }

    static get forecastDaily() {
        return `${API.base}/forecast/daily`;
    }
}

export default API;
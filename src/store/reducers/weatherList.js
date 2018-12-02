const initialState = {
    list: [],
    city: {
        coord: { lon: 30.2905, lat: 59.9294 },
        country: 'RU',
        id: 519690,
        name: 'Novaya Gollandiya'
    },
    request: false,
    error: null
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                request: true,
                error: false
            };

        case 'CANCEL_FETCH_WEATHER':
            return {
                ...state,
                request: false
            };

        case 'FETCH_SUCCESS_WEATHER':
            return {
                ...data,
                request: false,
                error: false
            };

        case 'FETCH_FAILED_WEATHER':
            return {
                ...state,
                request: false,
                error: action.data
            };

        case 'CLEAN_WEATHER':
            return initialState;

        default:
            return state;
    }
}
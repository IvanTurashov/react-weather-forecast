const initialState = {
    list: [],
    city: {},
    request: false
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'FETCH_WEATHER':
            return {
                ...state,
                request: true
            };

        case 'CANCEL_FETCH_WEATHER':
            return {
                ...state,
                request: false
            };

        case 'FETCH_SUCCESS_WEATHER':
            return {
                ...data,
                request: false
            };
        case 'CLEAN_WEATHER':
            return initialState;

        default:
            return state;
    }
}
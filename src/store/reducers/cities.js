const initialState = {
    list: [],
    request: false
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch (type) {
        case 'FETCH_CITIES':
            return {
                ...state,
                request: true
            };

        case 'CANCEL_FETCH_CITIES':
            return {
                ...state,
                request: false
            };

        case 'FETCH_SUCCESS_CITIES':
            return {
                ...data,
                request: false
            };
        case 'CLEAN_CITIES':
            return initialState;

        default:
            return state;
    }
}
export const fetch = (data) => ({
    type: 'FETCH_WEATHER',
    data
});

export const cancelFetch = () => ({
    type: 'CANCEL_FETCH_WEATHER'
});

export const fetchSuccess = (data) => ({
    type: 'FETCH_SUCCESS_WEATHER',
    data
});

export const fetchFailed = (data) => ({
    type: 'FETCH_FAILED_WEATHER',
    data
});

export const clear = (data) => ({
    type: 'CLEAN_WEATHER',
    data
});
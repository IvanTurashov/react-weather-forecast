export const fetch = (data) => ({
    type: 'FETCH_CITIES',
    data
});

export const cancelFetch = () => ({
    type: 'CANCEL_FETCH_CITIES'
});

export const fetchSuccess = (data) => ({
    type: 'FETCH_SUCCESS_CITIES',
    data
});

export const fetchFailed = (data) => ({
    type: 'FETCH_FAILED_CITIES',
    data
});

export const clear = (data) => ({
    type: 'CLEAN_CITIES',
    data
});
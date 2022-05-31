import {
    FETCH_MAKE_FAILURE,
    FETCH_MAKE_REQUEST,
    FETCH_MAKE_SUCCESS
} from './makeTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MAKE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MAKE_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_MAKE_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

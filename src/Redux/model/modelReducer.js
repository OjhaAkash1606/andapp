import {
    FETCH_MODEL_FAILURE,
    FETCH_MODEL_SUCCESS,
    FETCH_MODEL_REQUEST
} from './modelTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MODEL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MODEL_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_MODEL_FAILURE:
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

import axios from 'axios';
import {
    FETCH_MODEL_FAILURE,
    FETCH_MODEL_SUCCESS,
    FETCH_MODEL_REQUEST
} from './modelTypes';

const UrlPreFix = process.env.REACT_APP_APIURL;

export const fetchModel = () => {
    return dispatch => {
        dispatch(fetchModelRequest());
        axios
            .get(UrlPreFix + 'Motor/AllModelJson?subProductId=1', {
                headers: {
                    Authorization: 'Basic aUFuZEFwcDppQW5kQXBwQDIwMjI=$@!'
                },
            })
            .then(response => {
                const users = response.data.Response;
                dispatch(fetchModelSuccess(users));
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchModelFailure(error.message));
            });
    };
};

export const fetchModelRequest = () => {
    return {
        type: FETCH_MODEL_REQUEST
    };
};

export const fetchModelSuccess = users => {
    return {
        type: FETCH_MODEL_SUCCESS,
        payload: users
    };
};

export const fetchModelFailure = error => {
    return {
        type: FETCH_MODEL_FAILURE,
        payload: error
    };
};

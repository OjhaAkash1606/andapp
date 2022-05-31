import axios from 'axios';
import {
    FETCH_MAKE_FAILURE,
    FETCH_MAKE_REQUEST,
    FETCH_MAKE_SUCCESS
} from './makeTypes';

const UrlPreFix = process.env.REACT_APP_APIURL;

export const fetchMake = () => {
    return dispatch => {
        dispatch(fetchMakeRequest());
        axios
            .get(UrlPreFix + 'Motor/TWManufacturer')
            .then(response => {
                const users = response.data.Response;
                dispatch(fetchMakeSuccess(users));
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchMakeFailure(error.message));
            });
    };
};

export const fetchMakeRequest = () => {
    return {
        type: FETCH_MAKE_REQUEST
    };
};

export const fetchMakeSuccess = users => {
    return {
        type: FETCH_MAKE_SUCCESS,
        payload: users
    };
};

export const fetchMakeFailure = error => {
    return {
        type: FETCH_MAKE_FAILURE,
        payload: error
    };
};

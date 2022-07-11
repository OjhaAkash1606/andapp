import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes';

const UrlPreFix = process.env.REACT_APP_APIURL;

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios(UrlPreFix + 'Motor/RTOcityDisplayOrderJson', {
      headers: {
        Authorization: 'Basic aUFuZEFwcDppQW5kQXBwQDIwMjI=$@!'
      },
      params: {
        UserId: 0
      }
    })
      .then(response => {
        const users = response.data.Response;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

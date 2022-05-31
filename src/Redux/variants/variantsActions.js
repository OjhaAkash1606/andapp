import axios from 'axios';
import {
  FETCH_VARIANT_FAILURE,
  FETCH_VARIANT_REQUEST,
  FETCH_VARIANT_SUCCESS
} from './variantsTypes';

const UrlPreFix = process.env.REACT_APP_APIURL;

export const fetchVariants = () => {
  return dispatch => {
    dispatch(fetchVariantRequest());
    axios
      .get(UrlPreFix + 'Motor/AllVariantJson?subProductId=1', {
        headers: {
          Authorization: 'Basic aUFuZEFwcDppQW5kQXBwQDIwMjI=$@!'
        }
      })
      .then(response => {
        const users = response.data.Response;
        dispatch(fetchVariantSuccess(users));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchVariantFailure(error.message));
      });
  };
};

export const fetchVariantRequest = () => {
  return {
    type: FETCH_VARIANT_REQUEST
  };
};

export const fetchVariantSuccess = users => {
  return {
    type: FETCH_VARIANT_SUCCESS,
    payload: users
  };
};

export const fetchVariantFailure = error => {
  return {
    type: FETCH_VARIANT_FAILURE,
    payload: error
  };
};

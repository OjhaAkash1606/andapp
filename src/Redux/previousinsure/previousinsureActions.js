import axios from "axios";
import {
  FETCH_PREVIOUSINSURE_FAILURE,
  FETCH_PREVIOUSINSURE_REQUEST,
  FETCH_PREVIOUSINSURE_SUCCESS,
} from "./previousinsureTypes";

const UrlPreFix = process.env.REACT_APP_APIURL;

export const fetchPreviousInsure = () => {
  return (dispatch) => {
    dispatch(fetchPreviousInsureRequest());
    axios
      .get(UrlPreFix + "Motor/PreviousInsurerForTwoWheelerJson", {
        headers: {
          Authorization: "Basic aUFuZEFwcDppQW5kQXBwQDIwMjI=$@!",
        },
      })
      .then((response) => {
        const users = response.data.Response;
        dispatch(fetchPreviousInsureSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchPreviousInsureFailure(error.message));
      });
  };
};

export const fetchPreviousInsureRequest = () => {
  return {
    type: FETCH_PREVIOUSINSURE_REQUEST,
  };
};

export const fetchPreviousInsureSuccess = (users) => {
  return {
    type: FETCH_PREVIOUSINSURE_SUCCESS,
    payload: users,
  };
};

export const fetchPreviousInsureFailure = (error) => {
  return {
    type: FETCH_PREVIOUSINSURE_FAILURE,
    payload: error,
  };
};

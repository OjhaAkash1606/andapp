import {
  FETCH_PREVIOUSINSURE_FAILURE,
  FETCH_PREVIOUSINSURE_REQUEST,
  FETCH_PREVIOUSINSURE_SUCCESS,
} from "./previousinsureTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PREVIOUSINSURE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PREVIOUSINSURE_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_PREVIOUSINSURE_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

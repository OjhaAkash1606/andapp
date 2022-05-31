import {
  FETCH_VARIANT_REQUEST,
  FETCH_VARIANT_SUCCESS,
  FETCH_VARIANT_FAILURE
} from './variantsTypes';

const initialState = {
  loading: false,
  users: [],
  error: ''
};

// console.log(initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VARIANT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_VARIANT_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case FETCH_VARIANT_FAILURE:
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

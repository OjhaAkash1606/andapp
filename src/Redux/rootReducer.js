// import { combineReducers } from "redux";
// import rtoReducer from "./getrtocity/rtoReducer";

// const rootReducer = combineReducers({
//   rtocity: rtoReducer,
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import makeReducer from './make/makeReducer';
import modelReducer from './model/modelReducer';
import variantsReducer from './variants/variantsReducer';
import previousInsurer from "./previousinsure/previousinsureReducer";

const rootReducer = combineReducers({
  user: userReducer,
  make: makeReducer,
  model: modelReducer,
  variants: variantsReducer,
  Insurer: previousInsurer,
});

export default rootReducer;

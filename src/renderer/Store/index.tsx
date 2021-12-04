import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import auth from "./reducers/auth.reducer";
import Organization from "./reducers/Organization.reducer";




const ConfigureStore=()=>{
  const middleware = [thunk];

const store = createStore(
  combineReducers({
    auth,
    organization:Organization
  }),
  applyMiddleware(...middleware)
);
return store;
}

export default ConfigureStore;




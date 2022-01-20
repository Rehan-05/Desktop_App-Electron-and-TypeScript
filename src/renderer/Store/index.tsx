import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import auth from "./reducers/auth.reducer";
import Organization from "./reducers/Organization.reducer";
import Project from './reducers/Project.reducer';




const ConfigureStore=()=>{
  const middleware = [thunk];

const store = createStore(
  combineReducers({
    auth,
    Project,
    organization:Organization
  }),
  applyMiddleware(...middleware)
);
return store;
}

export default ConfigureStore;




import { combineReducers } from 'redux';

import { createErrorReducer, createIsFetchingReducer } from './common';

const createLoginReducer = () => {
  return combineReducers({
    isChecking: createIsFetchingReducer('AUTH_LOGIN'),
    error: createErrorReducer('AUTH_LOGIN'),
  });
};

const createRegisterReducer = () => {
  return combineReducers({
    isChecking: createIsFetchingReducer('AUTH_REGISTER'),
    error: createErrorReducer('AUTH_REGISTER'),
  });
};

function CreateAuthReucers() {
  const UserData = JSON.parse(localStorage.getItem('User')||"null");

  const user = (state = UserData, action: any) => {

    const { type, user } = action;

    switch (type) {
      case 'AUTH_ON_ERROR':
      case 'AUTH_ON_INIT':
      case "AUTH_LOGOUT_SUCCESS":
        return null;
      // case 'AUTH_REGISTER_SUCCESS':
      case 'AUTH_LOGIN_SUCCESS':
      case 'AUTH_ON_SUCCESS':
        return user;
      default:
        return state;
    }
  };

  return combineReducers({
    user:user,
    isChecking: createIsFetchingReducer('AUTH_ON'),
    login: createLoginReducer(),
    register: createRegisterReducer(),
  });
}

export default CreateAuthReucers();

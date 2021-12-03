import { createErrorReducer, createIsFetchingReducer } from './common';



const OrganizationReducer = () => {
 const AdminData = JSON.parse(localStorage.getItem('User')||"null");

 const Admin = (state = AdminData, action:any) => {
  debugger
  const { type, user } = action;
  switch (type) {
    case 'CREATE_ORGANIZATION_REQUEST':
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case 'CREATE_ORGANIZATION_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: null,
        user,
      };
    case 'CREATE_ORGANIZATION_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
 }
};
}

export default OrganizationReducer;

import { createErrorReducer, createIsFetchingReducer } from './common';
import { combineReducers } from 'redux';



const OrganizationReducer = () => {
 const organization = (state =null  , action:any) => {

  const { type, organization } = action;
  switch (type) {
    case 'CREATE_ORGANIZATION_INIT':
    case 'CREATE_ORGANIZATION_FAILURE':
      return null;
    case 'CREATE_ORGANIZATION_SUCCESS':
      return organization;
    default:
      return state;
 }
};

return combineReducers({
  organization,
  isChecking: createIsFetchingReducer('CREATE_ORGANIZATION'),
  error: createErrorReducer('CREATE_ORGANIZATION'),
});
}

export default OrganizationReducer();

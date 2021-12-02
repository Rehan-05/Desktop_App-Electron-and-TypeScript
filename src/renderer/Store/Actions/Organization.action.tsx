import api from 'renderer/Api/auth.api';


const CreateOrganization = (Data:any,token:string) =>(dispatch:any) => {
  debugger
  dispatch({ type: 'CREATE_ORGANIZATION_REQUEST' });
  api.createOrganizationApi(Data,token).then(res => {

    dispatch({ type: 'CREATE_ORGANIZATION_SUCCESS', organization: res.data });
    return res.data;
  }).catch(err => {
    dispatch({ type: 'CREATE_ORGANIZATION_FAILURE', error: err });
    return err;
  })
}


export {
  CreateOrganization
}

import { StringifyOptions } from "querystring";
import http from "../Util/http-common";

class ApiCntainerClass {


  SignIn(data:any) {
    debugger;
    return http.post("/auth/signin", data);
  }

  Register(data:any) {
    return http.post(`/auth/signup`, data);
  }


   createOrganizationApi(data:any,token:string) {
      const header = {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    return http.post('/createOrganization', data,{headers:header});
  }

  AddMembers(data:any,token:string) {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  return http.post('/Members/create', data,{headers:header});
  }
  GetMembers(company:string,token:string) {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  return http.get(`/Project/get/${company}`,{headers:header});
  }
  CreateProject(data:any,token:string) {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
    debugger;
  return http.post('/Project/create', data,{headers:header});
  }
  GetProjects(company:string,token:string) {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  return http.get(`/Project/get/${company}`,{headers:header});
  }
  UploadDocument(data:any,token:string)
  {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  return http.post(`/File/upload`,data,{headers:header});
  }



}

export default new ApiCntainerClass();

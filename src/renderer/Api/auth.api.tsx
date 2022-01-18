import { StringifyOptions } from "querystring";
import http from "../Util/http-common";

class TutorialDataService {


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



}

export default new TutorialDataService();

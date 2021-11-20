import http from "../Util/http-common";

class TutorialDataService {


  SignIn(data:any) {
    return http.post("/auth/signin", data);
  }

  Register(data:any) {
    return http.post(`/auth/signup`, data);
  }



}

export default new TutorialDataService();

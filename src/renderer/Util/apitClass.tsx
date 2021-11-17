import http from "./http-common";

class TutorialDataService {
  getAll() {
    debugger
    return http.get("/");
  }

  get(id:string) {
    return http.get(`/show/${id}`);
  }

  create(data:any) {
    return http.post("/store", data);
  }

  update(id:any, data:any) {
    return http.put(`/update/${id}`, data);
  }

  delete(id:any) {
    return http.delete(`/destroy/${id}`);
  }

}

export default new TutorialDataService();

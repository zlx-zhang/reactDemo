import { httpGet, httpPost } from "../utils/http";
import base from "./base";

const api = {
  getParams(){
    return httpGet(base.url + base.params);
  },
  getToken(params){
    return httpPost(base.url + base.token ,params)
  }
}

export default api;
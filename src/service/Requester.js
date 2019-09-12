import axios from "axios";

class Requester {

  static get(url) {
    return axios.get(url);
  }

  // static post(url, json) {
  //   return axios.post(url, JSON.stringify(json));
  // }
}

export default Requester;

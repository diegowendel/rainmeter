import axios from "axios";

class Requester {

  static get(url) {
    return axios.get(url);
  }

  static post(url, json) {
    return axios.post(url, JSON.stringify(json));
  }

  static getBaseUrl() {
    let origin = window.location.origin;
    let href = window.location.href;
    let uri = href.substring(origin.length + 1);
    console.log('origin', origin);
    console.log('href', href);
    console.log('uri', uri);
  }
}

export default Requester;

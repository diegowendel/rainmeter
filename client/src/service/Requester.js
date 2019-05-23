
class Requester {

  get(url) {
    console.log('get', url);
  }

  post(url, json) {
    console.log('post', url);
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

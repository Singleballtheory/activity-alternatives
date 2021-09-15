export default class Service {
  static getQuote() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://type.fit/api/quotes`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
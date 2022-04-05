import http from "k6/http";

export class Client {
  constructor() {
    // eslint-disable-next-line no-undef
    this.host = __ENV.BASE_URL || "http://localhost:3000";
  }

  get(path, customOpts = {}) {
    // eslint-disable-next-line prefer-object-spread
    let opts = Object.assign({}, customOpts, this.defaultOpts());

    return http.get(`${this.host}${path}`, opts);
  }

  post(path, body, customOpts = {}) {
    // eslint-disable-next-line prefer-object-spread
    let opts = Object.assign({}, customOpts, this.defaultOpts());

    return http.post(`${this.host}${path}`, body, opts);
  }

  defaultOpts() {
    return {
      headers: {
        "accept": "application/vnd.api+json",
        "content-type": "application/vnd.api+json",
      },
    };
  }
}

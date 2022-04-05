import { Client } from "../client.js";

export class BaseEndpoint {
  constructor(client) {
    this.client = client || new Client();
  }

  success(requestDescription) {
    return {
      [requestDescription]: (request) => request.status === 200,
    };
  }

  successCreated(requestDescription) {
    return {
      [requestDescription]: (request) => request.status === 201,
    };
  }
}

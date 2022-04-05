import { BaseEndpoint } from "./base_endpoint.js";
import { SessionResponse } from "../response/session_response.js";
import { check } from "k6";

// eslint-disable-next-line no-undef
const EMAIL = __ENV.EMAIL || "user@example.com";
// eslint-disable-next-line no-undef
const PASSWORD = __ENV.PASSWORD || "password";
export class SessionEndpoint extends BaseEndpoint {
  // eslint-disable-next-line no-warning-comments
  /*
   * TODO better check for 201?
   */

  login() {
    let url = "/api/v1/sessions";
    let body = {
      data: {
        type: "session",
        attributes: {
          email: EMAIL,
          password: PASSWORD,
        }
      }
    };
    let request = this.client.post(url, JSON.stringify(body), { tags: { type: "fast" } });

    check(request, this.successCreated("login request"));

    return new SessionResponse(request);
  }


  fetchSessionWithUser() {
    let url = "/api/v1/sessions?include=user";
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("session user request"));

    return new SessionResponse(request);
  }
}

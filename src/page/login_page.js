import { group } from "k6";
import { SessionEndpoint } from "../endpoint/session_endpoint.js";
export class LoginPage {
  constructor() {
    this.authenticationToken = "";
  }

  visit() {
    group("user login", () => {
      let sessionResponse = new SessionEndpoint().login();

      // Example of parsing the session response for attribute or header values
      this.authenticationToken = sessionResponse.authenticationToken;
    });
  }
}

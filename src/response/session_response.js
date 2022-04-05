import { BaseResponse } from "./base_response.js";

export class SessionResponse extends BaseResponse {
  userRelationshipId() {
    return this.itemRelationshipId("user");
  }

  authenticationToken() {
    return "5";
  }
}

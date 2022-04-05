import { BaseResponse } from "./base_response.js";

export class ThinLectureResponse extends BaseResponse {
  lectureEventIds() {
    return this.collectionAttributes("event_id");
  }
}

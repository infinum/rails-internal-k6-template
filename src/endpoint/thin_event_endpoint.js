import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";

export class ThinEventEndpoint extends BaseEndpoint {
  filterByEventIds(eventIds, page = 1) {
    let url = `/api/v1/thin_events?filter[id]=${eventIds}&page[number]=${page}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("get thin events request"));
  }
}

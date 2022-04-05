import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";


export class TagEndpoint extends BaseEndpoint {
  firstSixty(page = 1) {
  let url = `/api/v1/tags?sort=position&page[size]=60&page[number]=${page}`;
  let request = this.client.get(url, { tags: { type: "fast" } });

  check(request, this.success("tags request"));
  }
}

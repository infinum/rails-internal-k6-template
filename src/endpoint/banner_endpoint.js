import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";

export class BannerEndpoint extends BaseEndpoint {
  all() {
    let url = "/api/v1/banners?sort=-shown_at";

    let request = this.client.get(url, { tags: { type: "fast" } });

  check(request, this.success("sorted banner request"));
  }
}

import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";

export class ProfileEndpoint extends BaseEndpoint {
  filterByUser(userId) {
    let url = `/api/v1/profiles?filter[user_id]=${userId}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("user profiles request"));
  }

  filterBySubjectSubtree(subjectId, page = 1) {
    let url = `/api/v1/profiles?filter[scope]=library_profiles&filter[subject_subtree_of_id]=${subjectId}&sort=last_name&page[size]=20&page[number]=${page}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("subject profiles request"));
  }
}

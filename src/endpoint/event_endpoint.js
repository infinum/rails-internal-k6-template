import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";


export class EventEndpoint extends BaseEndpoint {
  filterBySubjectSubtree(subjectId, page = 1) {
    let url = `/api/v1/events?filter[library]=true&filter[subject_subtree_of_id]=${subjectId}&sort=-starts_at&include=conference&page[size]=12&page[number]=${page}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("subject events request"));
  }
}


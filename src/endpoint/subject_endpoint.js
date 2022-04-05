import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";


export class SubjectEndpoint extends BaseEndpoint {
  show(subjectId) {
    let url = `/api/v1/subjects/${subjectId}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("subject show request"));
  }

  roots() {
    let url = "/api/v1/thin_subjects?filter[scope]=roots&page[size]=100";
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("root subjects request"));
  }

  filterByChildren(subjectId, page = 1) {
    let url = `/api/v1/thin_subjects?filter[parent_id]=${subjectId}&filter[scope]=with_library_lectures&page[size]=20&page[number]=${page}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("children subjects request"));
  }

  filterByAncestors(subjectId, page = 1) {
    let url = `/api/v1/thin_subjects?filter[ancestors_of_id]=${subjectId}&filter[scope]=with_library_lectures&page[size]=20&page[number]=${page}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("children ancestors request"));
  }
}

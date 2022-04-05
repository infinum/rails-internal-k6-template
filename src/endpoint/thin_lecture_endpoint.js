import { BaseEndpoint } from "./base_endpoint.js";
import { check } from "k6";
import { ThinLectureResponse } from "../response/thin_lecture_response.js";


export class ThinLectureEndpoint extends BaseEndpoint {
  filterByLibrarySubjectSubtree(subjectId, page = 1) {
    let url = `/api/v1/thin_lectures?filter[library]=true&filter[scope]=published&filter[subject_subtree_of_id]=${subjectId}&sort=tag_position,id&include=sorted_profiles,tag&page[size]=16&page[number]=${page}`;
    let response = this.client.get(url, { tags: { type: "fast" } });

    check(response, this.success("get library subject subtree lecture"));
    return new ThinLectureResponse(response);
  }

  filterByLibrarySubjectSubtreePaginated(subjectId, currentPage = 1, lastPage = 5) {
    let url = `/api/v1/thin_lectures?filter[library]=true&filter[scope]=published&filter[subject_subtree_of_id]=${subjectId}&sort=tag_position,id&include=sorted_profiles,tag&page[size]=16&page[number]=${currentPage}`;
    let request = this.client.get(url, { tags: { type: "fast" } });

    check(request, this.success("get library subject subtree lecture"));

    let response = new ThinLectureResponse(request);

    if (response.nextPageUrl() && currentPage <= lastPage) {
      return [response].concat(this.filterByLibrarySubjectSubtreePaginated(subjectId, currentPage + 1, lastPage));
    }
      return [response];

  }

}

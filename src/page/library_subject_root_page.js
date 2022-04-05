import { ProfileEndpoint } from "../endpoint/profile_endpoint.js";
import { BannerEndpoint } from "../endpoint/banner_endpoint.js";
import { group } from "k6";
import { SubjectEndpoint } from "../endpoint/subject_endpoint.js";
import { ThinLectureEndpoint } from "../endpoint/thin_lecture_endpoint.js";
import { ThinEventEndpoint } from "../endpoint/thin_event_endpoint.js";
import { TagEndpoint } from "../endpoint/tag_endpoint.js";
import { EventEndpoint } from "../endpoint/event_endpoint.js";
import { SessionEndpoint } from "../endpoint/session_endpoint.js";

// eslint-disable-next-line no-undef
const SUBJECT_ID = parseInt(__ENV.SUBJECT_ID || "1", 10);

export class LibrarySubjectRootPage {
  visit() {
    group("library subject root page auxiliary", () => {
      let sessionResponse = new SessionEndpoint().fetchSessionWithUser();

      new ProfileEndpoint().filterByUser(sessionResponse.userRelationshipId());
      new BannerEndpoint().all();
    });

    group("library subject root page header", () => {
      new SubjectEndpoint().show(SUBJECT_ID);
      new SubjectEndpoint().filterByChildren(SUBJECT_ID);
      new SubjectEndpoint().filterByAncestors(SUBJECT_ID);
    });

    group("library subject root page body", () => {
      let thinLecturesResponses = new ThinLectureEndpoint().filterByLibrarySubjectSubtreePaginated(SUBJECT_ID);
      let subjectLectureEventIds = new Set();

      thinLecturesResponses.forEach((response) => {
        subjectLectureEventIds.add(...response.lectureEventIds());
      });

      new ThinEventEndpoint().filterByEventIds(Array.from(subjectLectureEventIds));
      new TagEndpoint().firstSixty();
      new ProfileEndpoint().filterBySubjectSubtree(SUBJECT_ID);
      new EventEndpoint().filterBySubjectSubtree(SUBJECT_ID);
    });
  }
}

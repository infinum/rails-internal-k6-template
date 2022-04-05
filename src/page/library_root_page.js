import { ProfileEndpoint } from "../endpoint/profile_endpoint.js";
import { BannerEndpoint } from "../endpoint/banner_endpoint.js";

import { group } from "k6";
import { SubjectEndpoint } from "../endpoint/subject_endpoint.js";
import { SessionEndpoint } from "../endpoint/session_endpoint.js";
export class LibraryRootPage {
  constructor(authenticationToken) {
    // eslint-disable-next-line no-undef
    this.authenticationToken = authenticationToken || __ENV.AUTHENTICATION_TOKEN;
  }

  visit() {
    group("library root visit", () => {
      let sessionResponse = new SessionEndpoint().fetchSessionWithUser();
      let userId = sessionResponse.userRelationshipId();
      new ProfileEndpoint().filterByUser(userId);
      new BannerEndpoint().all();
      new SubjectEndpoint().roots();

      /*
       * Example of passing top level authentication token to an endpoint
       * new SampleEndpoint(this.authenticationToken).fetch();
       */
    });
  }
}

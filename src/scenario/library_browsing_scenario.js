
import { LoginPage } from "../page/login_page.js";
import { LibraryRootPage } from "../page/library_root_page.js";
import { LibrarySubjectRootPage } from "../page/library_subject_root_page.js";

export class LibraryBrowsingScenario {
  run() {


    new LoginPage().visit();
    new LibraryRootPage().visit();
    new LibrarySubjectRootPage().visit();

    // Example of authentication token passing

    /*
     * Let loginPage = new LoginPage();
     * loginPage.visit();
     * new LibraryRootPage(loginPage.authenticationToken).visit();
     */
  }
}

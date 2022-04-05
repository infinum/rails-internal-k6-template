import { LibraryBrowsingScenario } from "../src/scenario/library_browsing_scenario.js";

export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "10s", target: 10 },
    { duration: "10s", target: 0 },
  ],
  thresholds: {
    "http_req_duration{type:fast}": ["p(99)<1000"],
    "http_req_duration{type:medium}": ["p(99)<2000"],
    "http_req_duration{type:slow}": ["p(99)<3000"],
  },
};

export default function () {
  const scenario = new LibraryBrowsingScenario();
  scenario.run();
  // Shared array?
}

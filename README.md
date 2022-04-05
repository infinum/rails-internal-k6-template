* Goal
This repository should be used as a load testing resource for Infinum teams. It should allow a project team to implement a load testing scenario without spending too much time learning the k6 tool and reinventing the wheel.

* Technical contributions
- an example k6 repository structure
  - Javascript linting support (eslint + prettier)
- an example file/folder/class structure that supports a composable and reusable load test setup
  - a scenario which includes multiple pages
  - a page which includes multiple API calls
  - an endpoint which implements various API calls belonging to a single resource
- basic item & collection JSON:API response parsing support for attributes and relationships
- fetching all paginated pages
- simple examples of holding state (e.g. IDs, tokens) between consecutive multiple requests
- setting per request type response time thresholds

* Usage

BASE_URL=https://example.com SUBJECT_ID=5 k6 run script/scenario.js

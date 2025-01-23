// usage `PR_DESCRIPTION_JSON=$(cat ./pr-validate-description-test-data.json | base64) node pr-validate-description.js`

let inputData = Buffer.from(process.env.PR_DESCRIPTION_JSON, "base64").toString(
  "utf8",
);
let prDescription = JSON.parse(inputData);

console.log("Parsed PR Description:", JSON.stringify(prDescription, null, 2));

validateQaSection(prDescription.Quality_Assurance);
validateResolvedIssuesSection(prDescription.Issues_resolved_by_this_PR);

function fail(fieldName, message) {
  console.log(`❌ ${fieldName}:
  > ${message}`);
  process.exitCode = 1;
}

function pass(fieldName, message) {
  console.log(`✅ ${fieldName}:
  > ${message}`);
}

function validateQaSection(qaSection) {
  const SUCCESS_CRITERIA_TITLE =
    "- Once this change is deployed, success criteria is:";

  let qaCheckList = qaSection.bodies.filter((item) => item.type === "list")[0];

  let successCriteria = qaCheckList.items[0];
  if (successCriteria.raw.trim() == SUCCESS_CRITERIA_TITLE) {
    fail(
      "Success criteria",
      `Pull requests must have a short description of success criteria, in field "${successCriteria.raw}"`,
    );
  } else {
    pass("Success criteria", successCriteria.raw);
  }
}

function validateResolvedIssuesSection(resolvedIssues) {
  const GITHUB_ISSUE_FORMAT = /#\d+/g;

  console.log(
    "Resolved Issues Object:",
    JSON.stringify(resolvedIssues, null, 2),
  );

  console.log("Full PR Description:", process.env.PR_DESCRIPTION_JSON);

  if (!resolvedIssues || !resolvedIssues.bodies) {
    fail(
      "Missing resolved issues section",
      `Pull requests must include a valid 'Issues resolved by this PR' section with at least one GitHub issue (e.g., #123) or explicitly state 'N/A'. Please refer to our contributing guide: https://github.com/devopness/devopness/blob/main/CONTRIBUTING.md`,
    );
    return;
  }

  const issuesCheckList = resolvedIssues.bodies
    .filter((item) => item.type === "list")
    .at(0);
  const issueList = issuesCheckList?.raw.match(GITHUB_ISSUE_FORMAT) ?? [];

  if (
    issueList.length === 0 &&
    !issuesCheckList?.raw.toLowerCase().includes("n/a")
  ) {
    fail(
      "Missing resolved issues list",
      `Pull requests must specify at least one resolved GitHub issue (e.g., #123) or "N/A" if no issue applies, in field "${issuesCheckList.raw}". If no issue exists, you are free to register one before proceeding. Please refer to our contributing guide: https://github.com/devopness/devopness/blob/main/CONTRIBUTING.md`,
    );
  } else {
    pass(
      "Issues resolved by this pull request",
      issueList.length > 0 ? issueList : "N/A",
    );
  }
}

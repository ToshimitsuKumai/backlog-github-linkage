'use strict';

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

module.exports.create = async event => {
  const body = JSON.parse(event.body);

  const result = await createIssue(
    body.content.summary,
    body.content.description
  )

  return {
    statusCode: result.status,
    body: JSON.stringify({
      message: 'Issue created!!',
      body: result,
    },
      null,
      2
    ),
  };
};

const createIssue = async (title, body) => {
  return await octokit.issues.create({
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    title: title,
    body: body
  }).catch(error => {
    console.log(error)
    return error
  });
}

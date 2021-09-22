<h1 align="center">Welcome to link_backlog_to_github 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Link backlog to github

## Install

```sh
npm install -g serverless
```

```sh
npm install
```

## Setting
Create an IAM with administrator privileges for serverless (Adjust as needed).   
Add the following variables to the AWS parameter store.
- GITHUB_OWNER
- GITHUB_REPO
- GITHUB_ACCESS_TOKEN

## Deploy

```sh
sls deploy -v
```

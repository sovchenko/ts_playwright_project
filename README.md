# Babayky Project

## Instalation

Install latest [LTS version of NodeJs](https://nodejs.org/en/download/)


Clone the project using following command:

`git clone`

Install all required dependencies using following command:

`npm install`

## Run tests

To run tests run the following command in the terminal:

`npm test`

By default tests run in Chromium. If you want to run tests in Firefox or Safari pass `BROWSER` environmental variable as follows:

for Firefox:
> `BROWSER=firefox npm test`

for Safari:
> `BROWSER=webkit npm test`

## Reporting

Project supports allure report. To generate allure report run following command:

`npx allure ./allure-results`

This command should create the `allure-report` directory in the root directory of the project. Now you can open the allure report in the browser using following command:

`npx allure open ./allure-report`

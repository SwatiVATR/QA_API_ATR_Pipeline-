const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success, apikeymissing ,appIdmissing,appPassmissing,appUsernamemissing} = require("../../RequestBodies/ListJobsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/ListJobs`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
it(
  "Auth Key is missing ||invalid Auth Key",
  async () => {
    const postData = JSON.stringify(apikeymissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "Plain text received as response",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "Appid is invalid or empty",
  async () => {
    const postData = JSON.stringify(appIdmissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "appPass is invalid or empty",
  async () => {
    const postData = JSON.stringify(appPassmissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "appUsername is invalid or empty",
  async () => {
    const postData = JSON.stringify(appUsernamemissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/ListJobs")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
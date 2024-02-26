const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success, apikeymissing,appIdmissing,appPassmissing,appUsernamemissing } = require("../../RequestBodies/StatusUpdateJobsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/StatusUpdateJobs`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.RecID.length >= 1).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
      reporter.description("Response message from API:" + JSON.stringify(response))
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
      reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
      reporter.description("Response message from API:" + JSON.stringify(response))
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
        reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "appId is missing or invalid appId",
    async () => {
      const postData = JSON.stringify(appIdmissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.Response.RecID?true:false).toBe(false);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "appPass is missing or invalid appPass",
    async () => {
      const postData = JSON.stringify(appPassmissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.Response.RecID?true:false).toBe(false);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  it(
    "appUsername is missing or invalid appUsername",
    async () => {
      const postData = JSON.stringify(appUsernamemissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.Response.RecID?true:false).toBe(false);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/StatusUpdateJobs")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  appIdmissing,
  appPassmissing,
  appUsernamemissing,
  authKeymissing,
} = require("../../RequestBodies/JobDetailsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/JobDetails`,
  ...commonOptionsPOST,
};
let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Response.Orders ? true : false).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "appId missing|| invalid appId",
  async () => {
    const postData = JSON.stringify(appIdmissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Response.Orders ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


it(
  "appPass missing || Wrong appPass",
  async () => {
    const postData = JSON.stringify(appPassmissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Response.Orders ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "appUsername missing ||appUsername is invalid",
  async () => {
    const postData = JSON.stringify(appUsernamemissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.Response.Orders ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "Auth key is missing || invalid Auth key passed",
  async () => {
    const postData = JSON.stringify(authKeymissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


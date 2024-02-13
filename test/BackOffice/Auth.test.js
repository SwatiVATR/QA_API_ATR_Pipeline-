const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  authkeyinvalid,
  wrongAppid,
  wrongappPass,
  wrongappUsername,
} = require("../../RequestBodies/BackOfficeAuthBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/Auth`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(201);
      reporter.endStep();
    reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
    reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "Auth key is missing || Invalid Auth key entered",
  async () => {
    const postData = JSON.stringify(authkeyinvalid);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
      reporter.description("Response message from API:"+ JSON.stringify(response))
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
      reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "Wrong appId || appId is missing",
  async () => {
    const postData = JSON.stringify(wrongAppid);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "appPass is wrong || appPass is missing",
  async () => {
    const postData = JSON.stringify(wrongappPass);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "appUsername is wrong ||appUsername is empty",
  async () => {
    const postData = JSON.stringify(wrongappUsername);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Auth")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);




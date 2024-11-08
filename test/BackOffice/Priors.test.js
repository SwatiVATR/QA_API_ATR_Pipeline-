const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  authkeymissing,
} = require("../../RequestBodies/BackOfficePriorsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/Priors`,
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
      expect(response.Response.TransactionID.length > 0).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Priors")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "Auth key missing|| invalid Auth key",
  async () => {
    const postData = JSON.stringify(authkeymissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Priors")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
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
      response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/Priors")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

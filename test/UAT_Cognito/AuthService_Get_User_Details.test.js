const {
  STAGE,
  VERSION,
  commonOptionsGET,
  Timeout,
  commonOptionsGETwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
let response;
test(
  "Api success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/user`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.success.correlationId).toBe(1);
      reporter.endStep();

      reporter.testId("API Endpoint-/user")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
test(
  "No Auth provided",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/user`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
      reporter.endStep();

      reporter.testId("API Endpoint-/user")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

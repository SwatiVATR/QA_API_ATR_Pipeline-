const {
  STAGE,
  VERSION,
  Timeout,
  commonOptionsDELETE
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
let response;
test(
  "API Success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETE,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
test(
  "Email already exist",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETE,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

test(
  "BAD Request",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser`,
      ...commonOptionsDELETE,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify({}));
      response= await NAModule(postData, options);
      expect(response.error).toBe("argument of type 'NoneType' is not iterable");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

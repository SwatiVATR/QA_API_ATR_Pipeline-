const {
  STAGE,
  VERSION,
  commonOptionsDELETEwithoutHeader,
  Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
test(
  "API Success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Email already exist",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "BAD Request",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("argument of type 'NoneType' is not iterable");
      reporter.endStep();

      reporter.testId("API Endpoint-/services/invoker/cognito/deleteUser")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

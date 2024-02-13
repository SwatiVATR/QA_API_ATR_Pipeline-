const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";

test(
  "Api success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=sverma@actiontitleresearch.com`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=sverma@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "email not found",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=soneill@actiontitleresearch.com`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=soneill@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "only email attributes is passed",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "invalid email is passed",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=esdesd`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=esdesd")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

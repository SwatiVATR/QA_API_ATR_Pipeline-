const {
  STAGE,
  VERSION,
  Timeout,
  commonOptionsGET
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
let response;

test(
  "Api success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=sverma@actiontitleresearch.com`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=sverma@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


test(
  "email not found",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=soneill@actiontitleresearch.com`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

       response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=soneill@actiontitleresearch.com")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


test(
  "only email attributes is passed",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
     response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
test(
  "invalid email is passed",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=esdesd`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

       response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/getUser?email=esdesd")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
let response;
test(
  "API Success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/jwt/asdf-dev`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response=await NAModule(postData, options);
      expect(response.error.name).toBe("JsonWebTokenError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/jwt/asdf-dev")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
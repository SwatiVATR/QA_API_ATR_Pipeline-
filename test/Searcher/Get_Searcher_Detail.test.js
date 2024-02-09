const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");

it(
  "API Success",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/330`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcher/330")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "Wrong searcher id is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/434343330`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcher/434343330")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "special character in  searcher id",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/4343@#$43330`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcher/4343@#$43330")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
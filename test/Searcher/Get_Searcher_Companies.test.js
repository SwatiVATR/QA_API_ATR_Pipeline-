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
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/all`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcherCompanies/all")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "instead of all any random numbers is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/2151834341`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcherCompanies/2151834341")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "instead of all any special character is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/@33#$%`,
    };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcherCompanies/@33#$%")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success,appIdMissig,appPassMissing,appUsernameMissing,recIdMissing,authKeyMissing } = require("../../RequestBodies/PDFGenBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/PDFGen`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
    "appId Missig",
    async () => {
      const postData = JSON.stringify(appIdMissig);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  it(
    "appPass Missing",
    async () => {
      const postData = JSON.stringify(appPassMissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  it(
    "appUsername Missing",
    async () => {
      const postData = JSON.stringify(appUsernameMissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "recId Missing",
    async () => {
      const postData = JSON.stringify(recIdMissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  it(
    "authKey Missing",
    async () => {
      const postData = JSON.stringify(authKeyMissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/PDFGen")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
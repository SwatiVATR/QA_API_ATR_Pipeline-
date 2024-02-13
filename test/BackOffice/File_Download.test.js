const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  authKeyMissing,
  missingappId,
  missingappPass,
  missingappUsername,
  missingfileName,
  missingrecId
} = require("../../RequestBodies/FileDownloadBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/FileDownload`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
it(
    "authKeyMissing || Invalid Auth key",
    async () => {
      const postData = JSON.stringify(authKeyMissing);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
it(
  "Bad Request",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "invalid appId or missing appId",
  async () => {
    const postData = JSON.stringify(missingappId);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "invalid appPass or missing appPass",
  async () => {
    const postData = JSON.stringify(missingappPass);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "invalid appUsername or missing appUsername",
  async () => {
    const postData = JSON.stringify(missingappUsername);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "invalid fileName or missing fileName",
  async () => {
    const postData = JSON.stringify(missingfileName);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

it(
  "invalid recId or missing recId",
  async () => {
    const postData = JSON.stringify(missingrecId);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileDownload")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
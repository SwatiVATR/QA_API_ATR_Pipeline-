const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success } = require("../../RequestBodies/FileUploadBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/FileUpload`,
  ...commonOptionsPOST,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileUpload")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);

    }
  },
  Timeout
);

const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success } = require("../../RequestBodies/FileUploadBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/FileUpload`,
  ...commonOptionsPOST,
};
let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/FileUpload")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));

    }
  },
  Timeout
);

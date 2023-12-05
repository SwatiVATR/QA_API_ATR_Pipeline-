const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success } = require("../../RequestBodies/FileUploadBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/FileUpload`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
    } catch (error) {
      throw new Error();

    }
  },
  Timeout
);

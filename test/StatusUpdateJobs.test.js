const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");
const { success, apikeymissing } = require("../RequestBodies/StatusUpdateJobsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/StatusUpdateJobs`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.TransactionID.length >= 1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Auth Key is missing ||invalid Auth Key",
  async () => {
    const postData = JSON.stringify(apikeymissing);
    try {
      const response = await NAModule(postData, options);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

test(
    "Bad Request",
    async () => {
      const postData = JSON.stringify({});
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        expect(error).toBe("Error parsing response data");
      }
    },
    Timeout
  );
  

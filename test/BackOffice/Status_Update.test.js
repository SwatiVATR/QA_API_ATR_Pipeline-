const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success, apikeymissing,appIdmissing,appPassmissing,appUsernamemissing } = require("../../RequestBodies/StatusUpdateJobsBody");

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
      expect(response.Response.RecID.length >= 1).toBe(true);
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
      throw new Error(error);
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
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "appId is missing or invalid appId",
    async () => {
      const postData = JSON.stringify(appIdmissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.Response.RecID).toBe(false);

      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "appPass is missing or invalid appPass",
    async () => {
      const postData = JSON.stringify(appPassmissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.Response.RecID).toBe(false);

      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  test(
    "appUsername is missing or invalid appUsername",
    async () => {
      const postData = JSON.stringify(appUsernamemissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.Response.RecID).toBe(false);

      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
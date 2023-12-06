const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success, apikeymissing ,appIdmissing,appPassmissing,appUsernamemissing} = require("../../RequestBodies/ListJobsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/ListJobs`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(true);
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
  "Plain text received as response",
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
  "Appid is invalid or empty",
  async () => {
    const postData = JSON.stringify(appIdmissing);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "appPass is invalid or empty",
  async () => {
    const postData = JSON.stringify(appPassmissing);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "appUsername is invalid or empty",
  async () => {
    const postData = JSON.stringify(appUsernamemissing);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.Orders?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
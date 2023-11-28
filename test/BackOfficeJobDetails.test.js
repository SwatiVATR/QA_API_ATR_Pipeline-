const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");
const {
  success,
  appIdmissing,
  appPassmissing,
  appUsernamemissing,
  authKeymissing,
} = require("../RequestBodies/JobDetailsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/JobDetails`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);

      expect(response.Response.Orders ? true : false).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "appId missing",
  async () => {
    const postData = JSON.stringify(appIdmissing);
    try {
      const response = await NAModule(postData, options);

      expect(response.Response.Orders ? true : false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "appPass missing",
  async () => {
    const postData = JSON.stringify(appPassmissing);
    try {
      const response = await NAModule(postData, options);

      expect(response.Response.Orders ? true : false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "appUsername missing",
  async () => {
    const postData = JSON.stringify(appUsernamemissing);
    try {
      const response = await NAModule(postData, options);

      expect(response.Response.Orders ? true : false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Auth key is missing",
  async () => {
    const postData = JSON.stringify(authKeymissing);
    try {
      const response = await NAModule(postData, options);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

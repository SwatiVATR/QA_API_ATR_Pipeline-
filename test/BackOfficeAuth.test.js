const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");
const {
  success,
  authkeyinvalid,
} = require("../RequestBodies/BackOfficeAuthBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/Auth`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(201);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "Auth key is missing",
  async () => {
    const postData = JSON.stringify(authkeyinvalid);
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

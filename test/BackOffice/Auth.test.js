const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  authkeyinvalid,
  wrongAppid,
  wrongappPass,
  wrongappUsername,
} = require("../../RequestBodies/BackOfficeAuthBody");

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
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Auth key is missing || Invalid Auth key entered",
  async () => {
    const postData = JSON.stringify(authkeyinvalid);
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
  "Wrong appId || appId is missing",
  async () => {
    const postData = JSON.stringify(wrongAppid);
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "appPass is wrong || appPass is missing",
  async () => {
    const postData = JSON.stringify(wrongappPass);
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "appUsername is wrong ||appUsername is empty",
  async () => {
    const postData = JSON.stringify(wrongappUsername);
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);




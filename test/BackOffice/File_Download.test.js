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

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
    "authKeyMissing || Invalid Auth key",
    async () => {
      const postData = JSON.stringify(authKeyMissing);
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
  "invalid appId or missing appId",
  async () => {
    const postData = JSON.stringify(missingappId);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid appPass or missing appPass",
  async () => {
    const postData = JSON.stringify(missingappPass);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid appUsername or missing appUsername",
  async () => {
    const postData = JSON.stringify(missingappUsername);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid fileName or missing fileName",
  async () => {
    const postData = JSON.stringify(missingfileName);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "invalid recId or missing recId",
  async () => {
    const postData = JSON.stringify(missingrecId);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.FileURL?true:false).toBe(false);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
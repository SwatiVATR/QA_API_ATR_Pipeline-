const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");
const { success,appIdMissig,appPassMissing,appUsernameMissing,recIdMissing,authKeyMissing } = require("../RequestBodies/PDFGenBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/PDFGen`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(200);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
    "appId Missig",
    async () => {
      const postData = JSON.stringify(appIdMissig);
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "appPass Missing",
    async () => {
      const postData = JSON.stringify(appPassMissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "appUsername Missing",
    async () => {
      const postData = JSON.stringify(appUsernameMissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "recId Missing",
    async () => {
      const postData = JSON.stringify(recIdMissing);
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(404);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "authKey Missing",
    async () => {
      const postData = JSON.stringify(authKeyMissing);
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        expect(error).toBe("Error parsing response data");
      }
    },
    Timeout
  );
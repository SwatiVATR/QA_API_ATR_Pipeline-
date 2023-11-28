const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");
const { success,authkeymissing } = require("../RequestBodies/BackOfficePriorsBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/Priors`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.TransactionID.length > 0).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);


  test(
    "Auth key missing|| invalid Auth key",
    async () => {
      const postData = JSON.stringify(authkeymissing);
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
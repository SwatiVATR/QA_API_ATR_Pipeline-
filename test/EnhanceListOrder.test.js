const { STAGE, VERSION, commonOptionsGET,Timeout } = require("../config");
const NAModule = require("../modules/NAModule");


const postData = JSON.stringify({});

test(
  "API Success",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.success.correlationId).toBe(1);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "BAD Request",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response).toBe(null);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

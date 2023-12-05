const {STAGE,VERSION, Timeout,TOKEN } = require("../../config");
const HttpModule = require("../../modules/HttpModule");
const {CallbackOrderRamquestBody}=require("../../RequestBodies/CallbackOrderRamquest")
const options = {
  hostname: "35.91.100.230",
  port: 8000,
  path: `/${STAGE}/${VERSION}/callback/order/ramquest-test`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': TOKEN
  },

};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(CallbackOrderRamquestBody);
    try {
      const response = await HttpModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);



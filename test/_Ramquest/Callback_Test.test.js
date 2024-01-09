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
it('API Success', async () => {
  const postData = JSON.stringify(CallbackOrderRamquestBody);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await HttpModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
  } catch (error) {
      throw new Error(error);
  }
},Timeout)



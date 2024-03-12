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

let response;

it('API Success', async () => {
  const postData = JSON.stringify(CallbackOrderRamquestBody);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    response= await HttpModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/callback/order/ramquest-test")
      reporter.description("Response message from API:" + JSON.stringify(response))
  } catch (error) {
      throw new Error(JSON.stringify(response));
  }
},Timeout)



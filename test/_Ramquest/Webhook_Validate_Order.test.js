const { STAGE, VERSION, commonOptionsPOSTBasicAUTH,Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {WebhookOrderRequestBody,WebhookOrderRequestBodyWithoutproductsordered,WebhookOrderRequestBodyWithoutBody}=require("../../RequestBodies/WebhookOrderRequestBody")
const options = {
  path: `/${STAGE}/${VERSION}/webhook/order/ramquest`,
  ...commonOptionsPOSTBasicAUTH,
};
let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBody);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "productsordered is missing",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBodyWithoutproductsordered);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBodyWithoutBody);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);



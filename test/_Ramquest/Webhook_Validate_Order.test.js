const { STAGE, VERSION, commonOptionsPOSTBasicAUTH,Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {WebhookOrderRequestBody,WebhookOrderRequestBodyWithoutproductsordered,WebhookOrderRequestBodyWithoutBody}=require("../../RequestBodies/WebhookOrderRequestBody")
const options = {
  path: `/${STAGE}/${VERSION}/webhook/order/ramquest`,
  ...commonOptionsPOSTBasicAUTH,
};

it(
  "API Success",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBody);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + response.error)
    } catch (error) {
      throw new Error(error);
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
      const response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + response.error)
    } catch (error) {
      throw new Error(error);
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
      const response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/webhook/order/ramquest")
      reporter.description("Response message from API:" + response.error)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);



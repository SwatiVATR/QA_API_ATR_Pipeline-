const { STAGE, VERSION, commonOptionsPOSTBasicAUTH,Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {WebhookOrderRequestBody,WebhookOrderRequestBodyWithoutproductsordered,WebhookOrderRequestBodyWithoutBody}=require("../../RequestBodies/WebhookOrderRequestBody")
const options = {
  path: `/${STAGE}/${VERSION}/webhook/order/ramquest`,
  ...commonOptionsPOSTBasicAUTH,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBody);
    try {
      const response = await NAModule(postData, options);
      expect(response.success).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "productsordered is missing",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBodyWithoutproductsordered);
    try {
      const response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify(WebhookOrderRequestBodyWithoutBody);
    try {
      const response = await NAModule(postData, options);
      expect(response.error.success).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);



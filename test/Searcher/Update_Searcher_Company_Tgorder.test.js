const {
  STAGE,
  VERSION,
  commonOptionsPOST,
  Timeout,
  TOKEN,
  commonOptionsPOSTwithoutHeader
} = require("../../config");

const NAModule = require("../../modules/NAModule");
const tgorderId = 39315;
let response;
it(
  "API Success",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
      "searchCompanyId": 564
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.message).toBe(`Successfully updated searchCompanyId for tgorderId ${tgorderId}`);
      reporter.endStep();
      reporter.testId(`API Endpoint-/services/searcherCompany/order/${tgorderId}`)
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "searchCompanyId is passed blank",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
      "searchCompanyId": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.message).toBe(`Successfully updated searchCompanyId for tgorderId ${tgorderId}`);
      reporter.endStep();
      reporter.testId(`API Endpoint-/services/searcherCompany/order/${tgorderId}`)
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "End point is blank",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/`,
    };
    const postData = JSON.stringify({
      "searchCompanyId": 564
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcherCompany/order/")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "orderId not found || Passing string to orderId",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/31534@312@@@#`,
    };
    const postData = JSON.stringify({
      "searchCompanyId": 564
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe("Order with tgorderId 31534@312@@@ not found.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/searcherCompany/order/31534@312@@@#")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "BAD Request",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe("Missing searchCompanyId in the request body.");
      reporter.endStep();
      reporter.testId(`API Endpoint-/services/searcherCompany/order/${tgorderId}`)
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Invalid session",
  async () => {
    const options = {
      ...commonOptionsPOSTwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
      "searchCompanyId": 564
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.error).toBe(`Invalid Session`);
      reporter.endStep();
      reporter.testId(`API Endpoint-/services/searcherCompany/order/${tgorderId}`)
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
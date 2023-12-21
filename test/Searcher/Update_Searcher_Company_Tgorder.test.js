const {
  STAGE,
  VERSION,
  commonOptionsPOST,
  Timeout,
  TOKEN
} = require("../../config");

const NAModule = require("../../modules/NAModule");
const tgorderId=39315;
test(
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
      const response = await NAModule(postData, options);
      expect(response.message).toBe(`Successfully updated searchCompanyId for tgorderId ${tgorderId}`);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
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
      const response = await NAModule(postData, options);
      expect(response.message).toBe(`Successfully updated searchCompanyId for tgorderId ${tgorderId}`);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
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
      const response = await NAModule(postData, options);
      expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
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
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Order with tgorderId 31534@312@@@ not found.");
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
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Missing searchCompanyId in the request body.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
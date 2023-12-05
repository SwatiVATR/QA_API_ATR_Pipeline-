const { STAGE, VERSION, commonOptionsPOST, TOKEN ,Timeout} = require("../config");

const COR300TemplateModule = require("../modules/COR300TemplateModule");

const tgorderId = 39315;
test(
  "Successfully updated searchCompanyId for orderId 39315",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
      searchCompanyId: 564,
    });

    try {
      const response = await COR300TemplateModule(postData, options);

      expect(response.message).toBe(
        `Successfully updated searchCompanyId for tgorderId ${tgorderId}`
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "searchCompanyId is Blank.",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${tgorderId}`,
    };
    const postData = JSON.stringify({
      searchCompanyId: "",
    });
    try {
      const response = await COR300TemplateModule(postData, options);

      expect(response.message).toBe(
        `Successfully updated searchCompanyId for tgorderId ${tgorderId}`
      );
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
      searchCompanyId: "564",
    });
    try {
      const response = await COR300TemplateModule(postData, options);

      expect(response.message).toBe(
        `Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "orderId not found || Passing string to orderId",
  async () => {
    const orderid = "3931555555";
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/${orderid}`,
    };
    const postData = JSON.stringify({
      searchCompanyId: "564",
    });
    try {
      const response = await COR300TemplateModule(postData, options);

      expect(response.error).toBe(`Order with tgorderId ${orderid} not found.`);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "BAD REQUEST",
  async () => {
    const options = {
      ...commonOptionsPOST,
      path: `/${STAGE}/${VERSION}/services/searcherCompany/order/39315`,
    };
    const postData = JSON.stringify({});
    try {
      const response = await COR300TemplateModule(postData, options);

      expect(response.error).toBe("Missing searchCompanyId in the request body.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

const { STAGE, VERSION, commonOptionsGET, Timeout, TOKEN } = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});


it('API Success',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/40965704`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/40965704")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)


it('Wrong id passed in endpoints',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/409sd3edewd365704`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.correlationId).toBe(1);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/409sd3edewd365704")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('No id passed in endpoints',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('Special character passed in end point last',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/@#`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.correlationId).toBe(1);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/@#")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)


//fetch single order detail with the help of order id
const { STAGE, VERSION, commonOptionsGET, Timeout, TOKEN,commonOptionsGETwithoutHeader} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});

let response;
it('API Success',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/97584515`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.msg.length).toBeGreaterThan(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/97584515")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('wrong order id passed',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/sdsd81818`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.error.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/sdsd81818")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('special characters passed in order id',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/@@@`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.error.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/@@@")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('Token is missing',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/order/97584515`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/97584515")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
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
      response = await NAModule(postData, options);
      expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/order/")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
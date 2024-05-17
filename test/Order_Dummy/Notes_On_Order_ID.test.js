//fetch notes on the order id, if any present
const { STAGE, VERSION, commonOptionsGET, Timeout, TOKEN,commonOptionsGETwithoutHeader } = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});
let response;

it('API Success',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/ordernotes/76594913`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.msg.length).toBeGreaterThan(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/ordernotes/76594913")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)


it('Wrong id passed in endpoints',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/ordernotes/dfsdsa`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.msg.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/ordernotes/dfsdsa")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('No id passed in endpoints',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/ordernotes/`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/ordernotes/")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('Special character passed in end point last',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/ordernotes/@@@@`,
      ...commonOptionsGET,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.success.msg.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/ordernotes/@@@@")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('Token is missing',
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/ordernotes/76594913`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/ordernotes/76594913")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

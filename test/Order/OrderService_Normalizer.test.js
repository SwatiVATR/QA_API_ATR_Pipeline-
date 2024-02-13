const { STAGE, VERSION, commonOptionsPOST,commonOptionsPOSTBearer, Timeout,commonOptionsPOSTwithoutHeader} = require("../../config");
const NAModule = require("../../modules/NAModule");

const {
    Success
  } = require("../../RequestBodies/OrderService_Normalizer_Body");

  it('Api success',
  async () => {
    const postData = JSON.stringify({
      "order": Success
  });
    const options = {
      path: `/${STAGE}/${VERSION}/services/normalize/vendor?json`,
      ...commonOptionsPOSTBearer,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.credentials.agencyPortalId).toBe("Test12");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/vendor?json")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('Invalid file path',
  async () => {
    const postData = JSON.stringify({
        "order": "orderXML2"
    });
    const options = {
      path: `/${STAGE}/${VERSION}/services/normalize/vendor?json`,
      ...commonOptionsPOST,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid data or url or filepath argument: orderXML2\nExpecting value: line 1 column 1 (char 0)");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/vendor?json")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('file path is missing',
  async () => {
    const postData = JSON.stringify({
        "order": "orderXML2"
    });
    const options = {
      path: `/${STAGE}/${VERSION}/services/normalize/vendor?json`,
      ...commonOptionsPOST,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid data or url or filepath argument: orderXML2\nExpecting value: line 1 column 1 (char 0)");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/vendor?json")
      reporter.description("Response message from API:" +JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('Invalid sesson',
async () => {
  const postData = JSON.stringify({
    "order": Success
});
  const options = {
    path: `/${STAGE}/${VERSION}/services/normalize/vendor?json`,
    ...commonOptionsPOSTwithoutHeader,
  };
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
    expect(response.error).toBe("Invalid Session");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/vendor?json")
    reporter.description("Response message from API:" +JSON.stringify(response))
  } catch (error) {
    throw new Error(error);
  }
},
Timeout
)

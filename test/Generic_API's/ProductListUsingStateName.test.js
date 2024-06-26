const { BASE,STAGE, VERSION, commonOptionsGETBasicAUTH, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

let response;
const vendorName = encodeURIComponent('New Jersey');

it('API Success ',
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/api/products?state_name=${vendorName}`,
        ...commonOptionsGETBasicAUTH,
      };
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.products.length).toBeGreaterThan(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/api/products?state_name=New Jersey")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('Invalid endpoint passed',
  async () => {
    const postData = JSON.stringify({});
    const options = {
        path: `/${STAGE}/${VERSION}/api/searchvendo`,
        ...commonOptionsGETBasicAUTH,
      };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.message).toBe("'JWeems@ORTitleTech.com:XGRgcrNuoFN5NLGf' not a valid key=value pair (missing equal-sign) in Authorization header: 'Basic JWeems@ORTitleTech.com:XGRgcrNuoFN5NLGf'.");
      reporter.endStep();
      reporter.testId("API Endpoint-/api/searchvendo")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('incorrect state name passed',
  async () => {
    const postData = JSON.stringify({});
    const options = {
        path: `/${STAGE}/${VERSION}/api/products?state_name=sdsfxdsfx`,
        ...commonOptionsGETBasicAUTH,
      };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.products.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/api/products?state_name=sdsfxdsfx")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('special characters passed in state name',
  async () => {
    const postData = JSON.stringify({});
    const options = {
        path: `/${STAGE}/${VERSION}/api/products?state_name=@@@@@`,
        ...commonOptionsGETBasicAUTH,
      };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.products.length).toEqual(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/api/products?state_name=@@@@@")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('Login token missing',
  async () => {
    const postData = JSON.stringify({});
    const optionsWithoutToken = {
        path: `/${STAGE}/${VERSION}/api/searchvendors?vendor_name=${vendorName}`,
        hostname: BASE,
        method: "POST",
        headers: { "Content-Type": "application/json" },
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, optionsWithoutToken);
      expect(response.message).toBe("Missing Authentication Token");
      reporter.endStep();
      reporter.testId("API Endpoint-/api/searchvendors?vendor_name=Test Inc.")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

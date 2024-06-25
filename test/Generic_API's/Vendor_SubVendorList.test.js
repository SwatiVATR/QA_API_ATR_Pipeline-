const { BASE, STAGE, VERSION, commonOptionsGETBasicAUTH, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

let response;
it('API Success ',
  async () => {
    const postData = JSON.stringify({});
    const options = {
      path: `/${STAGE}/${VERSION}/api/searchvendors`,
      ...commonOptionsGETBasicAUTH,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.length).toBeGreaterThan(0);
      reporter.endStep();
      reporter.testId("API Endpoint-/api/searchvendors")
      reporter.description("Response message from API:" + JSON.stringify(response))

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
      path: `/${STAGE}/${VERSION}/api/searchvend`,
      ...commonOptionsGETBasicAUTH,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.message).toBe("'JWeems@ORTitleTech.com:XGRgcrNuoFN5NLGf' not a valid key=value pair (missing equal-sign) in Authorization header: 'Basic JWeems@ORTitleTech.com:XGRgcrNuoFN5NLGf'.");
      reporter.endStep();
      reporter.testId("API Endpoint-/api/searchvend")
      reporter.description("Response message from API:" + JSON.stringify(response))

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
      path: `/${STAGE}/${VERSION}/api/searchvendors`,
      hostname: BASE,
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, optionsWithoutToken);
      expect(response.message).toBe("Missing Authentication Token");
      reporter.endStep();
      reporter.testId("API Endpoint-/api/searchvendors")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

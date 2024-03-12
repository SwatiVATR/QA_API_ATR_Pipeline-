const { STAGE, VERSION,commonOptionsGET,Timeout,TOKEN } = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});
let response;
it(
  "API Success",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/notes/update-special-request-recipients/DEVTRUST1`,
        ...commonOptionsGET,
      };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
     response= await NAModule(postData, options);
      expect(response.success.statusCode).toBe(
        200
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/notes/update-special-request-recipients/DEVTRUST1")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
    "Endpoint is not passes",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/update-special-request-recipients/`,
            ...commonOptionsGET,
          };
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
       response= await NAModule(postData, options);
        expect(response.message).toBe(
         `Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`
        );
        reporter.endStep();
        reporter.testId("API Endpoint-/services/notes/update-special-request-recipients/")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );

 
const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/searcher/update`,
  };
  const NAModule = require("../../modules/NAModule");
  const { success } = require("../../RequestBodies/SearchUpdateBodies");
  let response;
  it(
      "API Success",
      async () => {
        const postData = JSON.stringify(success);
        try {
          reporter.startStep("Values passed:" + JSON.stringify(postData));
          response= await NAModule(postData, options);
          expect(response.success?true:false).toBe(true);
          reporter.endStep();
          reporter.testId("API Endpoint-/services/searcher/update")
          reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
          throw new Error(JSON.stringify(response));
        }
      },
      Timeout
    );
  
  
    it(
      "Plain text received as response",
      async () => {
        const postData = JSON.stringify({});
        try {
          reporter.startStep("Values passed:" + JSON.stringify(postData));
          response= await NAModule(postData, options);
          expect(response.success?true:false).toBe(true);
          reporter.endStep();
          reporter.testId("API Endpoint-/services/searcher/update")
          reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
          throw new Error(JSON.stringify(response));
        }
      },
      Timeout
    );
   it(
      "orders is missing ",
      async () => {
        const postData = JSON.stringify({"orders":""});
        try {
          reporter.startStep("Values passed:" + JSON.stringify(postData));
          response= await NAModule(postData, options);
          expect(response.success?true:false).toBe(true);
          reporter.endStep();
          reporter.testId("API Endpoint-/services/searcher/update")
          reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
          throw new Error(JSON.stringify(response));
        }
      },
      Timeout
    );
  
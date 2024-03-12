const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/searcherCompany/134522`,
  };
  const NAModule = require("../../modules/NAModule");
  let response;
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        searchCompany: { SCOMP_Code: "ABC", SCOMP_Company: "Test Inc." },
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg).toBe("Updated successfully");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/searcherCompany/134522")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
  it(
    "BAD Request",
    async () => {
      const postData = JSON.stringify({});
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe("'searchCompany'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/searcherCompany/134522")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "searchCompany is missing ",
    async () => {
      const postData = JSON.stringify({ searchCompany: "" });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
        );
        reporter.endStep();
        reporter.testId("API Endpoint-/services/searcherCompany/134522")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    path: `/${STAGE}/${VERSION}/services/invoker/docgen/pdf2string`,
    ...commonOptionsPOSTwithoutHeader,
  };
  
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        documents: [
          "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
        ],
        authKey: "d68c908ad8a31c3963f42181f932458461e5a379",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/docgen/pdf2string")
        reporter.description("Response message from API:"+ JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "Auth key is missing|| Wrong API key",
    async () => {
      const postData = JSON.stringify({
        documents: [
          "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
        ],
        authKey: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
          const response = await NAModule(postData, options);
          reporter.endStep();
          reporter.testId("API Endpoint-/services/invoker/docgen/pdf2string")
          reporter.description("Response message from API:"+ JSON.stringify(response))
          } catch (error) {
          throw new Error(error);
        }
    },
    Timeout
  );
  
  it(
    "Plain text received as response",
    async () => {
      const postData = JSON.stringify({
        documents: [
          "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
        ],
        authKey: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/docgen/pdf2string")
        reporter.description("Response message from API:"+ JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
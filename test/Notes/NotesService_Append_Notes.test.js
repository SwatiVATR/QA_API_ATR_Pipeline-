const {
  STAGE,
  VERSION,
  commonOptionsPUTwithoutHeader,
  Timeout,
} = require("../../config");
const options = {
  ...commonOptionsPUTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/notes/update`,
};
const NAModule = require("../../modules/NAModule");

const { success } = require("../../RequestBodies/NotesUpdateBody");


it('API Success',
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/notes/update")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('BAD Request',
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("'order'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/notes/update")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('orders is missing',
  async () => {
    const postData = JSON.stringify({ "order": "" });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/notes/update")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('order note is missing ',
  async () => {
    const postData = JSON.stringify({ "order": { "note": "" } });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe("'str' object does not support item assignment");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/notes/update")
      reporter.description("Response message from API:"+JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)



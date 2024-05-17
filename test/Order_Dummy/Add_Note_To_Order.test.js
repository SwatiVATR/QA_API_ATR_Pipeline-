// Add a note in order detail
const {
    CommentUpdateBody,
    Emptyorder,
    BADBody,
    Emptytransaction,
    Wrongorder,
    Wrongid,
    statusInactive,
    statusHold
  } = require("../../RequestBodies/CommentUpdateBody");
  const { STAGE, VERSION, commonOptionsPUT, Timeout,commonOptionsPUTwithoutHeader } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    path: `/${STAGE}/${VERSION}/services/comments/update`,
    ...commonOptionsPUT,
  };
  let response;
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify(CommentUpdateBody);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg.length >= 1).toBe(true);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
  it(
    "order is missing",
    async () => {
      const postData = JSON.stringify(Emptyorder);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
        );
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
  it(
    "transaction is missing",
    async () => {
      const postData = JSON.stringify(Emptytransaction);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe(
          "local variable '_where' referenced before assignment"
        );
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
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
      const postData = JSON.stringify(BADBody);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe("'order'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
  it(
    "Wrong order is passed",
    async () => {
      const postData = JSON.stringify(Wrongorder);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: 3434e3\nInvalid data type: <class 'float'>, expected dict or list."
        );
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
  
  it(
    "id is wrong",
    async () => {
      const postData = JSON.stringify(Wrongid);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
          0);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "status is Inactive",
    async () => {
      const postData = JSON.stringify(statusInactive);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
          0);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "status is hold",
    async () => {
      const postData = JSON.stringify(statusHold);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
          0);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Invalid Session",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/comments/update`,
        ...commonOptionsPUTwithoutHeader,
      };
      const postData = JSON.stringify(CommentUpdateBody);
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe("Invalid Session");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/comments/update")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
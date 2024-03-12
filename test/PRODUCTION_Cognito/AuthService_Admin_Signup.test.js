const dotenv = require('dotenv');
dotenv.config();
let response;
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const options = {
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup-dev`,
    ...commonOptionsPOSTwithoutHeader,
  };

  const PASSWORD=process.env.SWATI_PASSWORD
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: "sdddsssssddoglu@actiontitleresearch.com",
        password: PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Email already exist",
    async () => {
      const postData = JSON.stringify({
        username: "sdddssssoglu@actiontitleresearch.com",
        password:PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Email is blank",
    async () => {
      const postData = JSON.stringify({
        username: "",
        password: PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Password is blank",
    async () => {
      const postData = JSON.stringify({
        username: "sdddssssoglu@actiontitleresearch.com",
        password: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Email and Password both is blank",
    async () => {
      const postData = JSON.stringify({ username: "", password: "" });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Bad Request",
    async () => {
      const postData = JSON.stringify({ username: "", password: "" });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signup-dev")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
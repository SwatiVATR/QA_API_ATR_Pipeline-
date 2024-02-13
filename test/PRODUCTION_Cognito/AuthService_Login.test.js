const dotenv = require('dotenv');
dotenv.config();
const {
    PRODSTAGE,
    VERSION,
    HEADERWITHOUTTOKEN,
    Timeout,
    PRODBASE
  } = require("../../config");
  
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    hostname: PRODBASE,
    method: "POST",
    headers: HEADERWITHOUTTOKEN,
    path: `/${PRODSTAGE}/${VERSION}/services/invoker/cognito/signin`,
  };
  
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: process.env.SIGN_IN_USERNAME1,
        password: process.env.SIGN_IN_PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "username is missing ",
    async () => {
      const postData = JSON.stringify({
        username: "",
        password: process.env.SIGN_IN_PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "password is missing ",
    async () => {
      const postData = JSON.stringify({
        username:  process.env.SIGN_IN_USERNAME1,
        password: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "wrong username",
    async () => {
      const postData = JSON.stringify({
        username:  "wsdsd"+process.env.SIGN_IN_USERNAME1+"ejd",
        password:  process.env.SIGN_IN_PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "wrong password",
    async () => {
      const postData = JSON.stringify({
        username: process.env.SIGN_IN_USERNAME1,
        password:  process.env.SIGN_IN_PASSWORD+"sjfeusfeusgfuw",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "username and password both are incorrect",
    async () => {
      const postData = JSON.stringify({
        username:  process.env.SIGN_IN_USERNAME1+"sfdbfdbvd",
        password: process.env.SIGN_IN_PASSWORD+"sjfeusfeusgfuw",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
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
      
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/invoker/cognito/signin")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
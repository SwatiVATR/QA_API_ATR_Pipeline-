const dotenv = require('dotenv');
dotenv.config();
const {BASE, STAGE, VERSION, OrderAuthenticateToken, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  hostname: BASE,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: OrderAuthenticateToken,
  },
  path: `/${STAGE}/${VERSION}/services/async/MyStandardStateMachine`,
};


const USER=process.env.SWATI_USER_EMAIL
const PASSWORD=process.env.SWATI_PASSWORD
it(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      username: USER,
      password: PASSWORD,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/async/MyStandardStateMachine")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "username is missing",
  async () => {
    const postData = JSON.stringify({
      username: "",
      password: PASSWORD,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/async/MyStandardStateMachine")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "password is missing",
  async () => {
    const postData = JSON.stringify({
      username: USER,
      password: "",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/async/MyStandardStateMachine")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
it(
  "username and password is missing",
  async () => {
    const postData = JSON.stringify({
      username: "",
      password: "",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/async/MyStandardStateMachine")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "Bad Request",
  async () => {
    const postData = JSON.stringify({
      username: "",
      password: "",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/async/MyStandardStateMachine")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


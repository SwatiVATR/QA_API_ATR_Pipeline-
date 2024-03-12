const dotenv = require('dotenv');
dotenv.config();
const {
  STAGE,
  VERSION,
  commonOptionsPOSTwithoutHeader,
  Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup`,
  ...commonOptionsPOSTwithoutHeader,
};
const user = process.env.SWATI_USER_EMAIL
const password = process.env.SWATI_PASSWORD
let response;
it(
  "API Success",
  async () => {

    const randomUsername = await generateRandomUsername();
    const randomPassword = await generateRandomPassword();
    const postData = JSON.stringify({
      "username": randomUsername,
      "password": randomPassword
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "email already exists",
  async () => {
    const postData = JSON.stringify({
      "username": user,
      "password": password
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.body).toBe("An error occurred (UsernameExistsException) when calling the SignUp operation: An account with the given email already exists.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


it(
  "username is missing",
  async () => {
    const postData = JSON.stringify({
      "username": "",
      "password": password
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "password is missing",
  async () => {
    const postData = JSON.stringify({
      "username": user,
      "password": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "username and password both are empty",
  async () => {
    const postData = JSON.stringify({
      "username": "",
      "password": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "wrong user name is passed",
  async () => {
    const postData = JSON.stringify({
      "username": "@@@" + user,
      "password": "22!" + password
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


it(
  "wrong password is passed",
  async () => {
    const postData = JSON.stringify({
      "username": user,
      "password": "@@@@@@"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "wrong username and password are passed",
  async () => {
    const postData = JSON.stringify({
      "username": "@@@@@@@@",
      "password": "@@@@@@"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/cognito/signup")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);



function generateRandomUsername() {
  const randomString = Math.random().toString(36).substring(2, 8);
  return `user_${randomString}@example.com`;
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let randomPassword = '';
  for (let i = 0; i < 12; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomPassword;
}
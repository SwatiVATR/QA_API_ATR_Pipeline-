const dotenv = require('dotenv');
dotenv.config();
const {
    BASE,
    STAGE,
    VERSION,
    TOKEN,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    hostname: BASE,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    path: `/${STAGE}/${VERSION}/services/sync/MyExpressStateMachine`,
  };

  const USER=process.env.SWATI_USER_EMAIL
  const PASSWORD=process.env.SWATI_PASSWORD
  let response;
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: USER,
        password: PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response=await NAModule(postData, options);
        expect(response.success.statusCode).toBe(200);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/sync/MyExpressStateMachine")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  it(
    "Wrong username",
    async () => {
      const postData = JSON.stringify({
        "username": "io"+USER+"djd",
        "password": PASSWORD
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response=await NAModule(postData, options);
        expect(response.success.statusCode).toBe(200);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/sync/MyExpressStateMachine")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
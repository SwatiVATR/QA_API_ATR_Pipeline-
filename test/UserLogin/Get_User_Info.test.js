const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
    commonOptionsGETwithoutHeader
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const postData = ""
  const USER = process.env.SWATI_USER_EMAIL
  let response;
  test(
    "Api success",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/user`,
        ...commonOptionsGET,
      };
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.success.msg[0].user_email).toBe(USER);
        reporter.endStep();
        reporter.testId("API Endpoint-/user")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  test(
    "Login token is missing",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/user`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response= await NAModule(postData, options);
        expect(response.error).toBe("Invalid Session");
        reporter.endStep();
        reporter.testId("API Endpoint-/user")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(JSON.stringify(response));
      }
    },
    Timeout
  );
  
const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPOSTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/reset-password-link`,
  };
  const NAModule = require("../../modules/NAModule");
  const USERNAME=process.env.SWATI_USER_EMAIL
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.ResponseMetadata.HTTPStatusCode).toBe(200);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/reset-password-link")
        reporter.description("Response message from API:" + response)
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  it(
    "username is wrong",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME+"dfhdjfh",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/reset-password-link")
        reporter.description("Response message from API:" + response)
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  it(
    "username is empty",
    async () => {
      const postData = JSON.stringify({
        username: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/reset-password-link")
        reporter.description("Response message from API:" + response)
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

 
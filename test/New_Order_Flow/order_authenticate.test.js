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
    path: `/${STAGE}/${VERSION}/services/order-authenticate`,
  };
  const NAModule = require("../../modules/NAModule");
  const USERNAME=process.env.SWATI_USER_EMAIL
  const PASSWORD=process.env.SWATI_PASSWORD
  it(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME,
        password: PASSWORD,
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/order-authenticate")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "Username is missing",
    async () => {
      const postData = JSON.stringify({ username: "", password: PASSWORD });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/order-authenticate")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  it(
    "Password is missing",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME,
        password: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));

        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/order-authenticate")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  it(
    "Both username and password are empty",
    async () => {
      const postData = JSON.stringify({
        username: "",
        password: "",
      });
      try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));

        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
        reporter.endStep();
        reporter.testId("API Endpoint-/services/order-authenticate")
        reporter.description("Response message from API:" + JSON.stringify(response))
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
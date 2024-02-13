const dotenv = require('dotenv');
dotenv.config();
const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/unsubscribe-email`,
  ...commonOptionsPOST,
};
const EMAIL = process.env.SWATI_USER_EMAIL
it(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      email_address: EMAIL,
      reason: "BOUNCE",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Message).toBe(
        "Successfully added email address to suppression list."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
it(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Error).toBe("Message Not Delivered");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
it(
  "email_address is missing",
  async () => {
    const postData = JSON.stringify({
      email_address: "",
      reason: "BOUNCE",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("BadRequestException");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "email_address is not passed",
  async () => {
    const postData = JSON.stringify({
      reason: "BOUNCE",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Error).toBe("Message Not Delivered");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


it(
  "email_address is passed wrong",
  async () => {
    const postData = JSON.stringify({
      "email_address": "sv" + EMAIL + "szds",
      "reason": "BOUNCE"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "reason is passed empty",
  async () => {
    const postData = JSON.stringify({
      "email_address": EMAIL,
      "reason": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "reason is passed gibberish",
  async () => {
    const postData = JSON.stringify({
      "email_address": EMAIL,
      "reason": "HOLD"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "email_address & reason both are empty",
  async () => {
    const postData = JSON.stringify({
      "email_address": "",
      "reason": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      const response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("BadRequestException");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/unsubscribe-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
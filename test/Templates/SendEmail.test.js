//send an email template to all recipient attached
const dotenv = require('dotenv');
dotenv.config();
const {
  STAGE,
  VERSION,
  commonOptionsPOST,
  Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/send-email`,
  ...commonOptionsPOST,
};

const SCOUT_EMAIL = process.env.SIGNAL_SCOUT_EMAIL
const ACTION_EMAIL = process.env.SWATI_USER_EMAIL
let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "SRNotification",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Message).toBe(
        "Email Sent Successfully To All Recipients"
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Sender is missing",
  async () => {
    const postData = JSON.stringify({
      sender: "",
      recipient: [SCOUT_EMAIL],
      template: "SRNotification",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "recipient is missing",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: "",
      template: "SRNotification",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ParamValidationError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "template is missing",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Wrong template name is entered",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "wdwdwd",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "template_data is empty",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "SRNotification",
      template_data: "",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);


it(
  "template_data is invalid",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "SRNotification",
      template_data: "sadsdsd",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "Invalid session",
  async () => {
    const postData = JSON.stringify({
      sender: "No-reply@actioncentral.com",
      recipient: [SCOUT_EMAIL],
      template: "SRNotification",
      template_data:
        `{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": ${ACTION_EMAIL}}`,
    });


const options = {
  path: `/${STAGE}/${VERSION}/services/send-email`,
  ...commonOptionsPOSTwithoutHeader,
};
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));

      response= await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/send-email")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
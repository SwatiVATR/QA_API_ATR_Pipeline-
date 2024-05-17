//create an email template
const { firstNames, lastNames, Timeout, commonOptionsPOST, STAGE, VERSION,commonOptionsPOSTwithoutHeader } = require("../../config");
const NAModule = require("../../modules/NAModule")
const options = {
  ...commonOptionsPOST,
  path: `/${STAGE}/${VERSION}/services/create-template`,
};
let response;
const randomFirstName =
firstNames[Math.floor(Math.random() * firstNames.length)];
const randomLastName =
lastNames[Math.floor(Math.random() * lastNames.length)];
const randomFullName = randomFirstName + randomLastName;
const TemplateName=`${randomFirstName}-${randomLastName}-OrderCompletedEmail-${randomFullName}`
it(
  "Api Success on new template creation",
  async () => {
   
    const postData = JSON.stringify({
      name: TemplateName,
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Result.ResponseMetadata.HTTPStatusCode).toBe(200);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Template name already exists",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail11",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("AlreadyExistsException");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "400 Bad Request",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Error).toBe(
        "'name' is a mandatory field and is missing or empty."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "name is blank",
  async () => {
    const postData = JSON.stringify({
      name: "",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Error).toBe(
        "'name' is a mandatory field and is missing or empty."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "subject is blank",
  async () => {
    const postData = JSON.stringify({
      name: TemplateName,
      subject: "",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Error).toBe(
        "'subject' is a mandatory field and is missing or empty."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "text is blank",
  async () => {
    const postData = JSON.stringify({
      name: TemplateName,
      subject: "Action Title Order Completed",
      text: "",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Error).toBe(
        "'text' is a mandatory field and is missing or empty."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "html is blank",
  async () => {
    const postData = JSON.stringify({
      "name": TemplateName,
      "subject": "Action Title Order Completed",
      "text": "Notification",
      "html": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Error).toBe(
        "'html' is a mandatory field and is missing or empty."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Special character in name",
  async () => {
    const postData = JSON.stringify({
      name: "@@@@"+TemplateName,
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("ClientError");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
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
      name: TemplateName,
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    const options = {
      ...commonOptionsPOSTwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/create-template`,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/create-template")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
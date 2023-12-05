const { firstNames, lastNames, Timeout } = require("../config");
const CreateTemplateModule = require("../modules/CreateTemplateModule");
test(
  "Api Success on new template creation",
  async () => {
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomFullName = randomFirstName + randomLastName;
    const postData = JSON.stringify({
      name: `${randomFirstName}OrderCompletedEmail${randomFullName}`,
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });

    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Result.ResponseMetadata.HTTPStatusCode).toBe(200);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Template name already exists",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail11",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });

    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Result.errorType).toBe("AlreadyExistsException");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "400 Bad Request",
  async () => {
    const postData = JSON.stringify({});

    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Error).toBe(
        "'name' is a mandatory field and is missing or empty."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "name is blank",
  async () => {
    const postData = JSON.stringify({
      name: "",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });

    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Error).toBe(
        "'name' is a mandatory field and is missing or empty."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "subject is blank",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail",
      subject: "",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Error).toBe(
        "'subject' is a mandatory field and is missing or empty."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid subject",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail",
      subject: "wdwdcesc",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Result.errorType).toBe("AlreadyExistsException");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "text is blank",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail",
      subject: "Action Title Order Completed",
      text: "",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Error).toBe(
        "'text' is a mandatory field and is missing or empty."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "text is invalid",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail",
      subject: "Action Title Order Completed",
      text: "Notifsdsfdication",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Result.errorType).toBe("AlreadyExistsException");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "html is blank",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCompletedEmail",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Error).toBe(
        "'html' is a mandatory field and is missing or empty."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Special character in name",
  async () => {
    const postData = JSON.stringify({
      name: "OrderCo@@@@mpletedEmail",
      subject: "Action Title Order Completed",
      text: "Notification",
      html: "<html><body><p>Hi {{first_name}} {{last_name}},<br><br>The following are the completed order(s) :<br>{{AgencyOrderid}}  <br><br><strong>NEW!</strong> Action is using MaestroX to provide our customers with search order tracking and ETAs. You can view your order status and send us messages here https://portal.maestrox.com. Please login to see your recent orders and other valuable file information. If you do not yet have access, follow the link above and click the “Request Access” button. You will receive an email invitation from No-reply@actioncentral.com.<br><br> Thanks! </p></body></html>",
    });
    try {
      const response = await CreateTemplateModule(postData);
      expect(response.Result.errorType).toBe("ClientError");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

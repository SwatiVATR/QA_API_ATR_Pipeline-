const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    path: `/${STAGE}/${VERSION}/services/send-email`,
    ...commonOptionsPOSTwithoutHeader,
  };
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Message).toBe(
          "Email Sent Successfully To All Recipients"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "Sender is missing",
    async () => {
      const postData = JSON.stringify({
        sender: "",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("ClientError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  
  
  test(
    "recipient is missing",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: [""],
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("ClientError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  
  
  test(
    "template is missing",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("ClientError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "Wrong template name is entered",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "wdwdwd",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("TemplateDoesNotExistException");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "template_data is empty",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data: "",
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("ClientError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  
  test(
    "template_data is invalid",
    async () => {
      const postData = JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data: "sadsdsd",
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.Result.errorType).toBe("ClientError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
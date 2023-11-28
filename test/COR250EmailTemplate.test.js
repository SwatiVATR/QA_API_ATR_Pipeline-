const {Timeout}=require("../config")
const EmailTemplateModule = require("../modules/EmailTemplateModule");
const testCases = [
    {
      name: "Email successfully send",
      postData: JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      }),
      expectedErrorType: null,
    },
    {
      name: "Sender email is missing",
      postData: JSON.stringify({
        sender: "",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      }),
      expectedErrorType: "ClientError",
    },
    {
      name: "Recipient email is missing",
      postData: JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: "",
        template: "SRNotification",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      }),
      expectedErrorType: "ParamValidationError",
    },
    {
      name: "Template is missing",
      postData: JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "",
        template_data:
          '{ "request_type":"Rush", "client_order_id": "OrderNY-ABC_02", "email": "sverma@actiontitleresearch.com"}',
      }),
      expectedErrorType: "ClientError",
    },
    {
      name: "Template_data is missing",
      postData: JSON.stringify({
        sender: "No-reply@actioncentral.com",
        recipient: ["swati@signalscout.io"],
        template: "SRNotification",
        template_data: "",
      }),
      expectedErrorType: "ClientError",
    },
    {
      name: "BAD REQUEST",
      postData: JSON.stringify({}),
      expectedErrorType: "Message Not Delivered",
    },
  ];
  for (const testCase of testCases) {
    test(testCase.name, async () => {
      await EmailTemplateModule(testCase.name, testCase.postData, testCase.expectedErrorType);
    }, Timeout);
  }







const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/submit-notes`,
  ...commonOptionsPOST,
};
let response;
it('API Success of non ATR members',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.message).toBe(
        "Notes have been submitted successfully and an email has been sent to both the existing user and the non-ATR members."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('API Success of ATR members',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "363"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.message).toBe(
        "Notes have been submitted successfully and an email has been sent to ATR Support."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('client_orderId is missing',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Please provide a client_orderId");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('userID is missing',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('BAD REQUEST',
  async () => {
    const postData = JSON.stringify({});

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('Wrong client_orderId is passed',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("local variable 'transaction_id' referenced before assignment");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('Wrong userID is passed',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "@f@@@@@"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")

      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('Blank Spaces in client_orderId',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "      ",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "3esdesdw23352"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('note is empty',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "",
      "userID": "352"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("local variable 'transaction_id' referenced before assignment");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

it('special character in note ',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "@12@@@@@@$$",
      "userID": "3esdesdw23352"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)
it('blank space passed in note ',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "     ",
      "userID": "3esdesdw23352"
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)


it('API body is called empty',
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "",
      "note": "",
      "userID": ""
    });

    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/submit-notes")
      reporter.description("Response message from API:"+JSON.stringify(response))

    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
)

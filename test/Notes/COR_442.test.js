const {
  STAGE,
  VERSION,
  commonOptionsPOST,
  Timeout,
  commonOptionsPOSTwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/current_duedate_update`,
  ...commonOptionsPOST,
};
it('API Success',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "5093",
      "dueDate": 1
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.success).toBe(
        "An email with the updated details has been shared with the user."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('transaction_id is passed wrong',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "509wdewfewewd3",
      "dueDate": 1
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "Transaction not found."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('transaction_id is missing',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "",
      "dueDate": 1
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "transaction_id and due date are required."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('transaction_id is not passed in body',
  async () => {
    const postData = JSON.stringify({
      "dueDate": 1
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "transaction_id and due date are required."
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
it('dueDate is missing',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "5093",
      "dueDate": ""
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "invalid literal for int() with base 10: ''"
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('dueDate is passed as string or special characters',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "5093",
      "dueDate": "wasds@233232"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "invalid literal for int() with base 10: 'wasds@233232'"
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('Bad Request',
  async () => {
    const postData = JSON.stringify({
      "transaction_id": "5093",
      "dueDate": "wasds@233232"
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "invalid literal for int() with base 10: 'wasds@233232'"
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('Invalid session',

  async () => {
    const postData = JSON.stringify({
      "transaction_id": "5093",
      "dueDate": "wasds@233232"
    });
    const options = {
      path: `/${STAGE}/${VERSION}/services/current_duedate_update`,
      ...commonOptionsPOSTwithoutHeader,
    };
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await NAModule(postData, options);
      expect(response.error).toBe(
        "Invalid Session"
      );
      reporter.endStep();
      reporter.testId("API Endpoint-/services/current_duedate_update")
      reporter.description("Response message from API:" + JSON.stringify(response))

    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)
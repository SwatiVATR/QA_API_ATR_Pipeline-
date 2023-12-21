const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/unsubscribe-email`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      email_address: "smishra@actiontitleresearch.com",
      reason: "BOUNCE",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Message).toBe(
        "Successfully added email address to suppression list."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify({});
    try {
      const response = await NAModule(postData, options);
      expect(response.Error).toBe("Message Not Delivered");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "email_address is missing",
  async () => {
    const postData = JSON.stringify({
      email_address: "",
      reason: "BOUNCE",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("BadRequestException");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "email_address is not passed",
  async () => {
    const postData = JSON.stringify({
      reason: "BOUNCE",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Error).toBe("Message Not Delivered");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "email_address is passed wrong",
  async () => {
    const postData = JSON.stringify({
      "email_address": "sveeeerma@actiontitleresearch.com",
      "reason": "BOUNCE"
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "reason is passed empty",
  async () => {
    const postData = JSON.stringify({
      "email_address": "smishra@actiontitleresearch.com",
      "reason": ""
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "reason is passed gibberish",
  async () => {
    const postData = JSON.stringify({
      "email_address": "smishra@actiontitleresearch.com",
      "reason": "HOLD"
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Message).toBe("Successfully added email address to suppression list.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "email_address & reason both are empty",
  async () => {
    const postData = JSON.stringify({
      "email_address": "",
      "reason": ""
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.Result.errorType).toBe("BadRequestException");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
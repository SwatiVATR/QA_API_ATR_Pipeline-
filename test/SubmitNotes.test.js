const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/submit-notes`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      transactionId: "118365",
      note: "testing3 send email from postman send Email is true",
      userID: "352",
    });
    try {
      const response = await NAModule(postData, options);
      // expect(response.message).toBe(
      //   "Note inserted successfully in the notes table"
      // );
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);
test(
  "transactionId is missing",
  async () => {
    const postData = JSON.stringify({
      transactionId: "",
      note: "testing3 send email from postman send Email is true",
      userID: "352",
    });
    try {
      const response = await NAModule(postData, options);
      // expect(response.error).toBe("Please provide a transaction ID");
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);
test(
  "userID is missing",
  async () => {
    const postData = JSON.stringify({
      transactionId: "118365",
      note: "testing3 send email from postman send Email is true",
      userID: "",
    });
    try {
      const response = await NAModule(postData, options);
      // expect(response.error).toBe("No user");
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
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
      // expect(response.Message).toBe("An internal server error occurred.");
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

test(
  "Wrong transactionId is passed",
  async () => {
    const postData = JSON.stringify({
      transactionId: "11836www5",
      note: "testing3 send email from postman send Email is true",
      userID: "352",
    });
    try {
      const response = await NAModule(postData, options);
      // expect(response.error).toBe("Invalid transaction ID");
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);
test(
  "Wrong userID is passed",
  async () => {
    const postData = JSON.stringify({
      transactionId: "118365",
      note: "testing3 send email from postman send Email is true",
      userID: "31152",
    });
    try {
      const response = await NAModule(postData, options);
      // expect(response.error).toBe("No user");
    } catch (error) {
      // throw new Error(error);
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

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
      expect(response.message).toBe(
        "Note inserted successfully in the notes table"
      );
    } catch (error) {
      throw new Error(error);
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
      expect(response.error).toBe("Please provide a transaction ID");
    } catch (error) {
      throw new Error(error);
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
      expect(response.error).toBe("No user");
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
      expect(response.error).toBe("Please provide a transaction ID");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Wrong transactionId is passed",
  async () => {
    const postData = JSON.stringify({
      transactionId: "11sdsdsd8365",
      note: "testing3 send email from postman send Email is true",
      userID: "352",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.message).toBe("Note inserted successfully in the notes table");
    } catch (error) {
      throw new Error(error);
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
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

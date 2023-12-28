const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/submit-notes`,
  ...commonOptionsPOST,
};

test(
  "API Success of non ATR members",
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.message).toBe(
        "Notes have been submitted successfully, and an email has been sent to both the existing user and the non-ATR members."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "API Success of ATR members",
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "363"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.message).toBe(
        "Notes have been submitted successfully, and an email has been sent to ATR Support."
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "client_orderId is missing",
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Please provide a client_orderId");
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
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": ""
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
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
      expect(response.error).toBe("Invalid user id ");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Wrong client_orderId is passed",
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("local variable 'transaction_id' referenced before assignment");
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
      "client_orderId": "BT-7801",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "@f@@@@@"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Blank Spaces in client_orderId",
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "      ",
      "note": "testing3 send email from postman12 send Email is true",
      "userID": "3esdesdw23352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "note is empty", 
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "",
      "userID": "352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("local variable 'transaction_id' referenced before assignment");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "special character in note ", 
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "@12@@@@@@$$",
      "userID": "3esdesdw23352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "blank space passed in note ", 
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "BT-@43dc7801",
      "note": "     ",
      "userID": "3esdesdw23352"
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: '3esdesdw23352'");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "API body is called empty", 
  async () => {
    const postData = JSON.stringify({
      "client_orderId": "",
      "note": "",
      "userID": ""
  });
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid user id ");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
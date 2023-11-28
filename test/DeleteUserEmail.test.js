const {
  STAGE,
  VERSION,
  commonOptionsDELETEwithoutHeader,
  Timeout,
} = require("../config");
const NAModule = require("../modules/NAModule");
const postData = "";
test(
  "API Success",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      const response = await NAModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);
test(
  "Email already exist",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=dsdsdsd@actiontitleresearch.com`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("User not found for the provided email.");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Email is blank",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser?email=""`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      const response = await NAModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);
test(
  "BAD Request",
  async () => {
    const options = {
      path: `/${STAGE}/${VERSION}/services/invoker/cognito/deleteUser`,
      ...commonOptionsDELETEwithoutHeader,
    };
    try {
      const response = await NAModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

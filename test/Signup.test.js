const {
  STAGE,
  VERSION,
  commonOptionsPOSTwithoutHeader,
  Timeout,
} = require("../config");
const NAModule = require("../modules/NAModule");
const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup-dev`,
  ...commonOptionsPOSTwithoutHeader,
};
test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      username: "sdddsssssddoglu@actiontitleresearch.com",
      password: "Starbuxstarbux1!",
    });
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
    const postData = JSON.stringify({
      username: "sdddssssoglu@actiontitleresearch.com",
      password: "Starbuxstarbux1!",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Email is blank",
  async () => {
    const postData = JSON.stringify({
      username: "",
      password: "Starbuxstarbux1!",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Password is blank",
  async () => {
    const postData = JSON.stringify({
      username: "sdddssssoglu@actiontitleresearch.com",
      password: "",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
test(
  "Email and Password both is blank",
  async () => {
    const postData = JSON.stringify({ username: "", password: "" });
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

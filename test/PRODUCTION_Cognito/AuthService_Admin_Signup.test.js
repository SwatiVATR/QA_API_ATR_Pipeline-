const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const options = {
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup-dev`,
    ...commonOptionsPOSTwithoutHeader,
  };

  const PASSWORD=process.env.SWATI_PASSWORD
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: "sdddsssssddoglu@actiontitleresearch.com",
        password: PASSWORD,
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
    "Email already exist",
    async () => {
      const postData = JSON.stringify({
        username: "sdddssssoglu@actiontitleresearch.com",
        password:PASSWORD,
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
        password: PASSWORD,
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
  test(
    "Bad Request",
    async () => {
      const postData = JSON.stringify({ username: "", password: "" });
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
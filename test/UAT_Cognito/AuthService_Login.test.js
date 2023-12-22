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
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signin-dev`,
    ...commonOptionsPOSTwithoutHeader,
  };
  
  const USER1=process.env.SWATI_USER_EMAIL
  const PASSWORD1=process.env.SWATI_PASSWORD

  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        "username": USER1,
        "password": PASSWORD1
      });
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  
  
  
  test(
    "Wrong username",
    async () => {
      const postData = JSON.stringify({
        "username": "ti"+USER1,
        "password": PASSWORD1
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
    "Wrong password",
    async () => {
      const postData = JSON.stringify({
        "username": USER1,
        "password": "46sdsd"+PASSWORD1
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
    "Wrong username and password",
    async () => {
      const postData = JSON.stringify({
        "username": "ti"+USER1,
        "password": "46sdsd"+PASSWORD1
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
    "Plain text received as response",
    async () => {
      const postData = JSON.stringify({});
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
const dotenv = require('dotenv');
dotenv.config();
const {
    PRODSTAGE,
    VERSION,
    HEADERWITHOUTTOKEN,
    Timeout,
    PRODBASE
  } = require("../../config");
  
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    hostname: PRODBASE,
    method: "POST",
    headers: HEADERWITHOUTTOKEN,
    path: `/${PRODSTAGE}/${VERSION}/services/invoker/cognito/signin`,
  };
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: process.env.SIGN_IN_USERNAME1,
        password: process.env.SIGN_IN_PASSWORD,
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
    "username is missing ",
    async () => {
      const postData = JSON.stringify({
        username: "",
        password: process.env.SIGN_IN_PASSWORD,
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
    "password is missing ",
    async () => {
      const postData = JSON.stringify({
        username:  process.env.SIGN_IN_USERNAME1,
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
    "wrong username",
    async () => {
      const postData = JSON.stringify({
        username:  "wsdsd"+process.env.SIGN_IN_USERNAME1+"ejd",
        password:  process.env.SIGN_IN_PASSWORD,
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
    "wrong password",
    async () => {
      const postData = JSON.stringify({
        username: process.env.SIGN_IN_USERNAME1,
        password:  process.env.SIGN_IN_PASSWORD+"sjfeusfeusgfuw",
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
    "username and password both are incorrect",
    async () => {
      const postData = JSON.stringify({
        username:  process.env.SIGN_IN_USERNAME1+"sfdbfdbvd",
        password: process.env.SIGN_IN_PASSWORD+"sjfeusfeusgfuw",
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
      const postData = JSON.stringify({
      
      });
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
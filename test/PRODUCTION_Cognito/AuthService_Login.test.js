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
        username: "pdowning@actiontitleresearch.com",
        password: "StupidPortal#!1",
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
        password: "StupidPortal#!1",
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
        username: "pdowning@actiontitleresearch.com",
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
        username: "pdossssswning@actiontitleresearch.com",
        password: "StupidPortal#!1",
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
        username: "pdowning@actiontitleresearch.com",
        password: "StupidPddddortal#!1",
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
        username: "pdowddddddddning@actiontitleresearch.com",
        password: "StupidPddddddortal#!1",
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
    "BAD Request",
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
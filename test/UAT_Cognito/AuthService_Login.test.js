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
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        "username": "title@bluelandtitle.com",
        "password": "460@Bergen"
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
        "username": "tisdsdstle@bluelandtitle.com",
        "password": "460@Bergen"
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
        "username": "title@bluelandtitle.com",
        "password": "46sdsd0@Bergen"
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
        "username": "title@bluelandtitle.com",
        "password": "46sdsd0@Bergen"
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
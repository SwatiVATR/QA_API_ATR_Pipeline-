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
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup`,
    ...commonOptionsPOSTwithoutHeader,
  };
const user=process.env.SIGN_IN_DEV_USERNAME1
const password=process.env.SIGN_IN_DEV_PASSWORD
  test(
    "API Success",
    async () => {

      const randomUsername =await generateRandomUsername();
      const randomPassword =await generateRandomPassword();
      const postData = JSON.stringify({
        "username":randomUsername,
        "password": randomPassword
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(200);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "email already exists",
    async () => {
      const postData = JSON.stringify({
        "username": user,
        "password": password
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.body).toBe("An error occurred (UsernameExistsException) when calling the SignUp operation: An account with the given email already exists.");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  test(
    "username is missing",
    async () => {
      const postData = JSON.stringify({
        "username": "",
        "password": password
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
    "password is missing",
    async () => {
      const postData = JSON.stringify({
        "username": user,
        "password": ""
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
    "username and password both are empty", 
    async () => {
      const postData = JSON.stringify({
        "username": "",
        "password": ""
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
    "wrong user name is passed", 
    async () => {
      const postData = JSON.stringify({
        "username": "@@@"+user,
        "password": "22!"+password
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
    "wrong password is passed", 
    async () => {
      const postData = JSON.stringify({
        "username": user,
        "password": "@@@@@@"
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
    "wrong username and password are passed", 
    async () => {
      const postData = JSON.stringify({
        "username": "@@@@@@@@",
        "password": "@@@@@@"
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



   function generateRandomUsername() {
    const randomString = Math.random().toString(36).substring(2, 8);
    return  `user_${randomString}@example.com`;
  }
  
   function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let randomPassword = '';
    for (let i = 0; i < 12; i++) {
      randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return  randomPassword;
  }
const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPOSTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/order-authenticate`,
  };
  const NAModule = require("../../modules/NAModule");
  const USERNAME=process.env.ORDER_AUTH_USERNAME
  const PASSWORD=process.env.ORDER_AUTH_PASSWORD
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME,
        password: PASSWORD,
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
    "Username is missing",
    async () => {
      const postData = JSON.stringify({ username: "", password: PASSWORD });
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
    "Password is missing",
    async () => {
      const postData = JSON.stringify({
        username: USERNAME,
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
  
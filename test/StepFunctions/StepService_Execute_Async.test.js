const dotenv = require('dotenv');
dotenv.config();
const {BASE, STAGE, VERSION, OrderAuthenticateToken, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
  hostname: BASE,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: OrderAuthenticateToken,
  },
  path: `/${STAGE}/${VERSION}/services/async/MyStandardStateMachine`,
};


const USER=process.env.SWATI_USER_EMAIL
const PASSWORD=process.env.SWATI_PASSWORD
test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      username: USER,
      password: PASSWORD,
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(200);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

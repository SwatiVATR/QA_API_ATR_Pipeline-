const {
  BASE,
  STAGE,
  VERSION,
  OrderAuthenticateToken,
  Timeout,
} = require("../config");
const NAModule = require("../modules/NAModule");

const options = {
  hostname: BASE,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: OrderAuthenticateToken,
  },
  path: `/${STAGE}/${VERSION}/services/sync/MyExpressStateMachine`,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      username: "pat3@actiontitleresearch.com",
      password: "Starbuxstarbux1!",
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

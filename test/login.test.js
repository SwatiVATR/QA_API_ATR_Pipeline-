const https = require("https");
const { STAGE, VERSION, commonOptionsPOSTwithoutHeader,Timeout
} = require("../config");

const postData = JSON.stringify({
  username: "title@bbluelandtitle.com",
  password: "460@Bergen",
});

const options = {
  ...commonOptionsPOSTwithoutHeader,

  path: `/${STAGE}/${VERSION}/services/invoker/cognito/signin-dev`,

};

test(
  "Invalid Credentials",
  async () => {
    const responseDataPromise = new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseData = "";

        res.on("data", (chunk) => {
          responseData += chunk;
        });

        res.on("end", () => {
          console.log("Response:", responseData);
          resolve(responseData);
        });
      });

      req.on("error", (error) => {
        reject(error);
      });

      req.write(postData);
      req.end();
    });

    try {
      const responseData = await responseDataPromise;
      const data = JSON.parse(responseData);
      expect(data).toEqual({
        "body": "An error occurred (UserNotFoundException) when calling the InitiateAuth operation: User does not exist.",
        "statusCode": 500,
        "headers": {
            "Content-Type": "application/json"
        }
    });
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


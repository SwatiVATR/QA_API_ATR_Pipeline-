const https = require("https");
const {  STAGE, VERSION,commonOptionsPOSTwithoutHeader } = require("../config");
const options = {
 ...commonOptionsPOSTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/services/send-email`,

};
const EmailTemplateModule = async (testName, postData, expectedErrorType) => {
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
      expect(data.Result.errorType).toBe(expectedErrorType);
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = EmailTemplateModule;
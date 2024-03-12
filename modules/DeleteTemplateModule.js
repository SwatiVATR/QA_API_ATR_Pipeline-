const https = require("https");
const { STAGE, VERSION,commonOptionsDELETE } = require("../config");
const postData = JSON.stringify({
});
const DeleteTemplateModule = async (endpoint, expectedMessage) => {
    const responseDataPromise = new Promise((resolve, reject) => {
      const req = https.request({
       ...commonOptionsDELETE,
        path: `/${STAGE}/${VERSION}/services/${endpoint}/`,
       
      }, (res) => {
        let responseData = "";
        res.on("data", (chunk) => {
          responseData += chunk;
        });
        res.on("end", () => {
          resolve(responseData);
        });
      });
      req.on("error", (error) => {
        reject("Error response:",error);
      });
      req.write(postData);
      req.end();
    });
    try {
      const responseData = await responseDataPromise;
      const data = JSON.parse(responseData);
      expect(data.message).toBe(expectedMessage);
    } catch (error) {
      console.log(error);
      throw error;

    }
  };
  module.exports = DeleteTemplateModule;
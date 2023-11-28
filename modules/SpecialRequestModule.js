const https = require("https");
const {STAGE,VERSION,commonOptionsPOSTwithoutHeader}=require("../config")
const commonOptions = {
  ...commonOptionsPOSTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/notes/special-request`,

};
function SpecialRequestModule(postData, expectedErrorMessage) {
  return new Promise((resolve, reject) => {
    const req = https.request(commonOptions, (res) => {
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
  }).then((responseData) => {
    const data = JSON.parse(responseData);
    if (expectedErrorMessage) {
      expect(data.error||data).toEqual(expectedErrorMessage);
    } else {
      expect(data.success.statusCode).toBe(200||500);
    }
  });
}
module.exports = SpecialRequestModule;
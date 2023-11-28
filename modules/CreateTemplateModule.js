const https = require("https");
const { STAGE, VERSION, commonOptionsPOSTwithoutHeader } = require("../config");

const options = {
  ...commonOptionsPOSTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/create-template`,
};

const CreateTemplateModule = async (postData) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => {
        responseData += chunk;
      });
      res.on("end", () => {
        try {
          const parsedResponse = JSON.parse(responseData);
          resolve(parsedResponse);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
};

module.exports = CreateTemplateModule;

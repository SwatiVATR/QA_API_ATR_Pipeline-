const https = require("https");

const COR354TemplateModule = async (postData,options) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => {
        responseData += chunk;
      });
      res.on("end", () => {
        try {
          const data = JSON.parse(responseData);
          resolve(data);
        } catch (error) {
          reject("Error response:",error);
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
  module.exports = COR354TemplateModule;
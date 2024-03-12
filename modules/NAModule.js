const https = require("https");

const NAModule = async (postData, options) => {
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
          reject(new Error("Error response: " + error.message));
        }
      });
    });

    req.on("error", (error) => {
      reject(new Error(error.message));
    });

    req.write(postData);
    req.end();
  });
};

module.exports = NAModule;

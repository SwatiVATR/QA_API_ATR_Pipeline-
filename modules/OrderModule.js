const https = require("https");

function OrderModule(options) {
  return new Promise((resolve, reject) => {
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

    req.end();
  });
}

module.exports = OrderModule;


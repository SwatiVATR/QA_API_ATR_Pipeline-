const http = require("http");

const HttpModule = async (postData, options) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => {
        responseData += chunk;
      });
      res.on("end", () => {
        try {
          const data = JSON.parse(responseData);
          resolve(data);
        } catch (error) {
          reject("Response is not in valid json format");
        }
      });
    });

    req.on("error", (error) => {
      reject("Error response:",error)
    });

    req.write(postData);
    req.end();
  });
};

module.exports = HttpModule;

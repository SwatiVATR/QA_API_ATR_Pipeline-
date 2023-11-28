const https = require("https");

async function COR310TemplateModule(options, payload) {
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let responseData = '';
  
        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on("end", () => {
          const data = JSON.parse(responseData);
          resolve(data);
        });
      });
  
      req.on('error', (error) => {
        reject(error);
      });
  
      if (payload) {
        req.write(JSON.stringify(payload));
      }
  
      req.end();
    });
  }
  
  module.exports = COR310TemplateModule;
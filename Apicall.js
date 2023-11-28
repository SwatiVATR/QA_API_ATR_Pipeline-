const https = require("https");
const { STAGE, VERSION, commonOptionsPOST } = require("./config");
const data = JSON.stringify({"appId":"AppUser101","appPass":"Pass$123","appType":"Priors","appUsername":"SchPortal","recId":996641,"authKey":"c3932d68c908a63f428a31458461e5a3181f9d79"}  );
const options = {
  ...commonOptionsPOST,
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/Priors`,
};

const req = https.request(options, (res) => {
  let responseData = "";

  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    const data = JSON.parse(responseData);
    console.log("Response data:", data);
  });
});

req.on("error", (error) => {
  console.error(`Request error: ${error}`);
});

// Send the request with the payload
req.write(data);
req.end();

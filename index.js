const https = require("https");
const fs = require("fs");

const { STAGE, VERSION, commonOptionsPOSTwithoutHeader } = require("./config");

const data1 = JSON.stringify({
  username: "title@bluelandtitle.com",
  password: "460@Bergen",
});

const options1 = {
  path: `/${STAGE}/${VERSION}/services/invoker/cognito/signin-dev`,
  ...commonOptionsPOSTwithoutHeader,
};

const req1 = https.request(options1, (res) => {
  let responseData = "";

  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    const datares = responseData;
    if (datares) {
      fs.writeFile("token.txt", datares, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("File saved for signin-dev API!");

        callSecondAPI();
      });
    }
  });
});

req1.on("error", (error) => {
  console.error(`Request error: ${error}`);
});

req1.write(data1);
req1.end();

// Function to call the second API
function callSecondAPI() {
  const data2 = JSON.stringify({
    username: "pdowning@actiontitleresearch.com",
    password: "StupidPortal#!1",
  });

  const options2 = {
    method: "POST",
    ...commonOptionsPOSTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signin`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req2 = https.request(options2, (res) => {
    let responseData = "";

    res.on("data", (chunk) => {
      responseData += chunk;
    });

    res.on("end", () => {
      fs.writeFile("signInToken.txt", responseData, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("File saved for signin API!");
      });
    });
  });

  req2.on("error", (error) => {
    console.error(`Request error for second API: ${error}`);
  });

  req2.write(data2);
  req2.end();
}

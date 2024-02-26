const fs = require("fs");

function readFileContents(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return fileContents.trim();
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
}

const BASE = "nu1b6z2kx8.execute-api.us-east-1.amazonaws.com";
const STAGE = "uat";
const VERSION = "v1";
const PRODBASE = "f6f7lkwmzg.execute-api.us-east-1.amazonaws.com";
const PRODSTAGE= "prod";
const Timeout = 50000;
const TOKEN_FILE_PATH = "token.txt";
const TOKEN = readFileContents(TOKEN_FILE_PATH);

const OrderAuthenticateToken =
  "eyJraWQiOiJwaUM2bEp0NFZBV0tZdDdPcVZ1Wk1maW1hWjV1Tm5oWWxLV0hXTDVVMEpBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhODU1YjQ5Yi02ZDVlLTQxNDUtYTBhMS1lY2YzOTNjMDE3Y2UiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfYUhPWENrVTNjIiwiY29nbml0bzp1c2VybmFtZSI6ImE4NTViNDliLTZkNWUtNDE0NS1hMGExLWVjZjM5M2MwMTdjZSIsIm9yaWdpbl9qdGkiOiJmZTE5ZDNkYy1lM2I2LTQ0YjItOGQyNy0wYTYzZjJiZmFhMGUiLCJhdWQiOiIzcnB0ZGQzN3U5aWhxOGZxZGg2ZTNtNTAzMiIsImV2ZW50X2lkIjoiYjY3NzdkYjctZWFiOC00MmIyLTgwZTctM2Y0ZDM0NzY4YjExIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTk1OTk0NzksImV4cCI6MTY5OTYwMzA3OSwiaWF0IjoxNjk5NTk5NDc5LCJqdGkiOiJkODI2ZDA1ZC0zY2M3LTQwNjUtODNhNC01N2ZhOWRkOTA0M2MiLCJlbWFpbCI6Im1zaW5naEBhY3Rpb250aXRsZXJlc2VhcmNoLmNvbSJ9.N8PYYJ5lMhF0uImAluGg9H2V9BsCIgRJ8IRUzcBjwY0mHg_iq_8ORxqg0QQdV0r5Dobilchm7acZXaPBscNPojpMdznUmS4ywhvLizQIHYrRD_1hhcVnOEyDS_BH-1h_eboOTyHuxpXcc2egcQlVmCJK6dGDJs2pW1fZWsjf7f6wPz1oBts6wAZiCKCloMy5DjzE66cmDRpD2dPByWMH06BPe9GV2EKc5_08kT_Er794JtryiMA0kERljJoi81-Xpp8PXNADEeMZrcgEJ-Ly9a3wIGtA00ujgvom2MMA47DwPsw2jda-p7JK1_6I4DkmqeQUG08lGwwOwwoTMEYqlA";

const BASICAUTHTOKEN = "Basic JWeems@ORTitleTech.com:XGRgcrNuoFN5NLGf";
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: TOKEN,
};
const BEARERHEADERS = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};
const HEADERSWITHBASICAUTH = {
  "Content-Type": "application/json",
  Authorization: BASICAUTHTOKEN,
};
const HEADERWITHOUTTOKEN = {
  "Content-Type": "application/json",
};

const commonOptionsGET = {
  hostname: BASE,
  method: "GET",
  headers: HEADERS,
};
const commonOptionsPUT = {
  hostname: BASE,
  method: "PUT",
  headers: HEADERS,
};
const commonOptionsPOST = {
  hostname: BASE,
  method: "POST",
  headers: HEADERS,
};
const commonOptionsPOSTBearer = {
  hostname: BASE,
  method: "POST",
  headers: BEARERHEADERS,
};
const commonOptionsPOSTBasicAUTH = {
  hostname: BASE,
  method: "POST",
  headers: HEADERSWITHBASICAUTH,
};
const commonOptionsDELETE = {
  hostname: BASE,
  method: "DELETE",
  headers: HEADERS,
};

const commonOptionsGETwithoutHeader = {
  hostname: BASE,
  method: "GET",
  headers: HEADERWITHOUTTOKEN,
};
const commonOptionsPOSTwithoutHeader = {
  hostname: BASE,
  method: "POST",
  headers: HEADERWITHOUTTOKEN,
};
const commonOptionsPUTwithoutHeader = {
  hostname: BASE,
  method: "PUT",
  headers: HEADERWITHOUTTOKEN,
};
const commonOptionsDELETEwithoutHeader = {
  hostname: BASE,
  method: "DELETE",
  headers: HEADERWITHOUTTOKEN,
};

const firstNames = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Frank",
  "Grace",
  "Henry",
  "Isabel",
  "Jack",
];
const lastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Lee",
  "Garcia",
  "Martinez",
  "Lopez",
  "Cooper",
  "King",
  "Ward",
];

module.exports = {
  BASE,
  STAGE,
  VERSION,
  TOKEN,
  HEADERS,
  HEADERWITHOUTTOKEN,
  commonOptionsGET,
  commonOptionsPOST,
  commonOptionsPOSTBearer,
  commonOptionsDELETE,
  commonOptionsGETwithoutHeader,
  commonOptionsPOSTwithoutHeader,
  commonOptionsDELETEwithoutHeader,
  commonOptionsPUTwithoutHeader,
  commonOptionsPUT,
  firstNames,
  lastNames,
  Timeout,
  commonOptionsPOSTBasicAUTH,
  OrderAuthenticateToken,
  PRODBASE,
  PRODSTAGE,
};

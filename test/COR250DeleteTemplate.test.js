
const {TOKEN,Timeout}=require("../config")
const DeleteTemplateModule = require("../modules/DeleteTemplateModule");

test(
  "api success(correct name)",
  async () => {
    await DeleteTemplateModule(
      "delete-template",
      `Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`
    );
  },
  Timeout
);
test(
  "No name provided in end point",
  async () => {
    await DeleteTemplateModule(
      "delete-template",
      `Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`
    );
  },
  Timeout
);
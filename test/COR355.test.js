const { STAGE, VERSION, commonOptionsPOST,Timeout } = require("../config");

const COR355TemplateModule = require("../modules/COR355TemplateModule");

const options = {
  ...commonOptionsPOST,
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/SearcherList`,
};
test(
  "Succesfull Reponse",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });

    try {
      const response = await COR355TemplateModule(postData, options);
      expect(response.Response.TransactionID.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Auth Key is sending Blank.",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "SchPortal",
      authKey: "",
    });
    try {
      const response = await COR355TemplateModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

test(
  "APP user Name is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.TransactionID.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "APP ID point is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.TransactionID.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "APP PASS point is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appType: "SearcherList",
      appPass: "",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.TransactionID.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify({});
    try {
      const response = await COR355TemplateModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

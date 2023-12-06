const { STAGE, VERSION, commonOptionsPOSTwithoutHeader,Timeout } = require("../../config");

const COR354TemplateModule = require("../../modules/COR354TemplateModule");

const options = {
  ...commonOptionsPOSTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/ValUser`,
};
test(
  "Succesfull Reponse",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "ValUser",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });

    try {
      const response = await COR354TemplateModule(postData, options);

      expect(response.statusCode).toBe(201);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "No Such User Exists|| no appUsername is passed",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "ValUser",
      appUsername: "bkode@actiontitleresearch.com",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      const response = await COR354TemplateModule(postData, options);

      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Invalid API Key",
  async () => {
    const postData = JSON.stringify({
      "appId": "AppUser101",
      "appPass": "Pass$123",
      "appType": "ValUser",
      "appUsername": "SchPortal",
      "authKey": ""
    });
    try {
      const response = await COR354TemplateModule(postData, options);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Plain text received as response",
  async () => {
    const postData = JSON.stringify({});
    try {
      const response = await COR354TemplateModule(postData, options);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "appId is passed wrong || Special character passed in appId",
  async () => {
    const postData = JSON.stringify({
      "appId": "AppweeeUser101",
      "appPass": "Pass$123",
      "appType": "ValUser",
      "appUsername": "SchPortal",
      "authKey": "c3932d68c908a63f428a31458461e5a3181f9d79"
    });
    try {
      const response = await COR354TemplateModule(postData, options);

      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "appPass is passed wrong|| appPass is missing",
  async () => {
    const postData = JSON.stringify({
      "appId": "AppweeeUser101",
      "appPass": "$",
      "appType": "ValUser",
      "appUsername": "SchPortal",
      "authKey": "c3932d68c908a63f428a31458461e5a3181f9d79"
    });
    try {
      const response = await COR354TemplateModule(postData, options);

      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "appType is passed wrong|| appType is missing",
  async () => {
    const postData = JSON.stringify({
      "appId": "AppweeeUser101",
      "appPass": "$",
      "appType": "ValUser",
      "appUsername": "SchPortal",
      "authKey": "c3932d68c908a63f428a31458461e5a3181f9d79"
    });
    try {
      const response = await COR354TemplateModule(postData, options);

      expect(response.statusCode).toBe(401);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
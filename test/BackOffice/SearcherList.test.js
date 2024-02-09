const { STAGE, VERSION, commonOptionsPOST,Timeout } = require("../../config");

const COR355TemplateModule = require("../../modules/COR355TemplateModule");

const options = {
  ...commonOptionsPOST,
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/SearcherList`,
};
it(
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
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      expect(response.Response.SearcherList.length>=1).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
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
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "APP user Name is blank||APP user Name is passed wrong",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      expect(response.Response.SearcherList?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "APP ID is blank|| App id is passed wrong",
  async () => {
    const postData = JSON.stringify({
      appId: "",
      appPass: "Pass$123",
      appType: "SearcherList",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      expect(response.Response.SearcherList?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "APP PASS point is blank||APP PASS is passed wrong",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appType: "SearcherList",
      appPass: "",
      appUsername: "SchPortal",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      expect(response.Response.SearcherList?true:false).toBe(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

it(
  "Plain text received as response",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      const response = await COR355TemplateModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/SearcherList")
      reporter.description("Response message from API:" + response)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);




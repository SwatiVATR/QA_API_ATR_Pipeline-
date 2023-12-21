const { STAGE, VERSION, commonOptionsPOST,Timeout } = require("../../config");

const COR355TemplateModule = require("../../modules/COR355TemplateModule");

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
      expect(response.Response.SearcherList).toBe("1:admin:Chris Montero~322:SchPortal:Searcher Portal~365:ATR-Searcher:ATR Searcher~");
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
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
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
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.SearcherList?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
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
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.SearcherList?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
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
      const response = await COR355TemplateModule(postData, options);

      expect(response.Response.SearcherList?true:false).toBe(false);
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
      const response = await COR355TemplateModule(postData, options);
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);




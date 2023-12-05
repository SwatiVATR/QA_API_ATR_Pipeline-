const { STAGE, VERSION, commonOptionsPOST,Timeout } = require("../config");

const COR356TemplateModule = require("../modules/COR356TemplateModule");

const RepeatedOptions = {
  ...commonOptionsPOST,
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/StatusUpdateJobs`,
};
test(
  "Succesfull Reponse",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recId: 994547,
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

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
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recStatus: "NotesUpdate",
      recId: 994547,
      recStatusNote: "sadsds",
      authKey: "",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "searcherID is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recId: 994547,
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

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
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recId: 994547,
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

      expect(response.Response.RecID?true:false).toBe(false);
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
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      appPass: "",
      recId: 994547,
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

      expect(response.Response.RecID?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "APP USER Name  is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "",
      recId: 994547,
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

      expect(response.Response.RecID?true:false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "recID point is blank",
  async () => {
    const postData = JSON.stringify({
      recId: "",
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recStatus: "NotesUpdate",
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

      expect(response.Response.TransactionID.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "recStatus point is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recStatus: "",
      recId: 994547,
      recStatusNote: "[text]-Comments",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

      expect(response.Response.RecID).toBe("");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "recStatusNote point is blank",
  async () => {
    const postData = JSON.stringify({
      appId: "AppUser101",
      appPass: "Pass$123",
      appType: "StatusUpdateJobs",
      appUsername: "SchPortal",
      recStatus: "NotesUpdate",
      recId: 994547,
      recStatusNote: "",
      authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
      searcherID: "322",
    });
    try {
      const response = await COR356TemplateModule(postData, RepeatedOptions);

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
      const response = await COR356TemplateModule(postData, RepeatedOptions);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

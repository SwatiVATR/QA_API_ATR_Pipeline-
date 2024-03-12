const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
  success,
  appIdMissing,
  appPassMissing,
  appType,
  appUsername,
  recidMissig,
  authKeyMissig,
  ratingMissing,
  condodevMissing,
  filenameMissing,
  copyfeeMissing,
  surrogatesfee,
  otherfeeMissing,
  notesMissing
} = require("../../RequestBodies/s3DirectPDFBody");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/backoffice/s3DirectPDF`,
  ...commonOptionsPOST,
};
let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(response.Response.TransactionID.length > 0).toBe(true);
      console.log(response);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "appId is missing",
  async () => {
    const postData = JSON.stringify(appIdMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "appPass is missing",
  async () => {
    const postData = JSON.stringify(appPassMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "appType is missing",
  async () => {
    const postData = JSON.stringify(appType);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "appUsername is missing",
  async () => {
    const postData = JSON.stringify(appUsername);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "recidMissig is missing",
  async () => {
    const postData = JSON.stringify(recidMissig);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "authKey is missing|| invalid authKey",
  async () => {
    const postData = JSON.stringify(authKeyMissig);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "rating is missing",
  async () => {
    const postData = JSON.stringify(ratingMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "condodev is missing",
  async () => {
    const postData = JSON.stringify(condodevMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "filename is missing",
  async () => {
    const postData = JSON.stringify(filenameMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "surrogatesfee is missing",
  async () => {
    const postData = JSON.stringify(surrogatesfee);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

it(
  "copyfee is missing",
  async () => {
    const postData = JSON.stringify(copyfeeMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "otherfee is missing",
  async () => {
    const postData = JSON.stringify(otherfeeMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:"+ JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "notes is missing",
  async () => {
    const postData = JSON.stringify(notesMissing);
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response= await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);
it(
  "Plain text received",
  async () => {
    const postData = JSON.stringify({});
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await NAModule(postData, options);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/invoker/backoffice/s3DirectPDF")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

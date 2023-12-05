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

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(success);
    try {
      const response = await NAModule(postData, options);
      expect(response.Response.TransactionID.length > 0).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "appId is missing",
  async () => {
    const postData = JSON.stringify(appIdMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
test(
  "appPass is missing",
  async () => {
    const postData = JSON.stringify(appPassMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "appType is missing",
  async () => {
    const postData = JSON.stringify(appType);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "appUsername is missing",
  async () => {
    const postData = JSON.stringify(appUsername);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "recidMissig is missing",
  async () => {
    const postData = JSON.stringify(recidMissig);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "authKey is missing|| invalid authKey",
  async () => {
    const postData = JSON.stringify(authKeyMissig);
    try {
      const response = await NAModule(postData, options);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "rating is missing",
  async () => {
    const postData = JSON.stringify(ratingMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "condodev is missing",
  async () => {
    const postData = JSON.stringify(condodevMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "filename is missing",
  async () => {
    const postData = JSON.stringify(filenameMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "surrogatesfee is missing",
  async () => {
    const postData = JSON.stringify(surrogatesfee);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

test(
  "copyfee is missing",
  async () => {
    const postData = JSON.stringify(copyfeeMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
test(
  "otherfee is missing",
  async () => {
    const postData = JSON.stringify(otherfeeMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
test(
  "notes is missing",
  async () => {
    const postData = JSON.stringify(notesMissing);
    try {
      const response = await NAModule(postData, options);
      expect(!response.Response.FilesUploaded).toBe(true);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);
test(
  "Bad Request",
  async () => {
    const postData = JSON.stringify({});
    try {
      const response = await NAModule(postData, options);
    } catch (error) {
      throw new Error();
    }
  },
  Timeout
);

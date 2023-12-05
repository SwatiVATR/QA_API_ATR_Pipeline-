const { STAGE, VERSION, commonOptionsGET,Timeout,commonOptionsGETwithoutHeader } = require("../config");
const NAModule = require("../modules/NAModule");


const postData = JSON.stringify({});

test(
  "API Success",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.success.count>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "BAD Request",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response).toBe(null);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Invalid session",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=desc`,
      ...commonOptionsGETwithoutHeader,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid Session");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "status is passed as number",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=123&offset=0&limit=100&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.success.count===0).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "status is passed as active",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=active&offset=0&limit=100&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.success.count>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid offset passed",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=sdsd&limit=100&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: 'sdsd'");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "invalid limit passed",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=sdsd&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: 'sdsd'");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "limit passed as blank",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=&sort=desc`,
      ...commonOptionsGET,
    };
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("invalid literal for int() with base 10: ''");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
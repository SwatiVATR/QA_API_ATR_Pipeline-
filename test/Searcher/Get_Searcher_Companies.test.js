const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");

test(
  "API Success",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/all`,
    };
    const postData = JSON.stringify({});
    try {
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
  "instead of all any random numbers is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/2151834341`,
    };
    const postData = JSON.stringify({});
    try {
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "instead of all any special character is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcherCompanies/@33#$%`,
    };
    const postData = JSON.stringify({});
    try {
      const response = await NAModule(postData, options);
      expect(response.success.msg.length >= 1 ? true : false).toBe(false);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);
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
      path: `/${STAGE}/${VERSION}/services/searcher/330`,
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
  "Wrong searcher id is passed",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/434343330`,
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
  "special character in  searcher id",
  async () => {
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/4343@#$43330`,
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
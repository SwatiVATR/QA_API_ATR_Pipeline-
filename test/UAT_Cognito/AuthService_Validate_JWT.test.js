const {
    STAGE,
    VERSION,
    commonOptionsGETwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const postData = "";
  test(
    "API Success",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/invoker/jwt/asdf-dev`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.error.name).toBe("JsonWebTokenError");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
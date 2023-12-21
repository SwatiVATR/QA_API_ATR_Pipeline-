const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const postData = "";

  test(
    "Api success",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/user`,
        ...commonOptionsGET,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.success.correlationId).toBe(1);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

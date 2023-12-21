const {
    STAGE,
    VERSION,
    commonOptionsGETwithoutHeader,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const postData = "";

  test(
    "Api success",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=title@bluelandtitle.com`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.success.statusCode).toBe(200);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  test(
    "email not found",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=soneill@actiontitleresearch.com`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("User not found for the provided email.");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  test(
    "only email attributes is passed",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.success.statusCode).toBe(500);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "invalid email is passed",
    async () => {
      const options = {
        path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=esdesd`,
        ...commonOptionsGETwithoutHeader,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("User not found for the provided email.");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
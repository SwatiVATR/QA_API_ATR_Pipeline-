const { STAGE, VERSION,commonOptionsGET,Timeout,TOKEN } = require("../../config");
const NAModule = require("../../modules/NAModule");


const postData = JSON.stringify({});

test(
  "API Success",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/notes/update-special-request-recipients/DEVTRUST1`,
        ...commonOptionsGET,
      };
    try {
      const response = await NAModule(postData, options);
      expect(response.success.statusCode).toBe(
        200
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
    "Endpoint is not passes",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/update-special-request-recipients/`,
            ...commonOptionsGET,
          };
      try {
        const response = await NAModule(postData, options);
        expect(response.message).toBe(
         `Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

 
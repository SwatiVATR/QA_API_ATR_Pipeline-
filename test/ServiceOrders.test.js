const { STAGE, VERSION, commonOptionsGET,Timeout,TOKEN } = require("../config");
const NAModule = require("../modules/NAModule");


const postData = JSON.stringify({});

test(
  "API Success",
  async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/services/order/40965704`,
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


test(
    "Wrong id passed in endpoints",
    async () => {
      const options = {
          path: `/${STAGE}/${VERSION}/services/order/409sd3edewd365704`,
        ...commonOptionsGET,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg.length).toBe(0);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "No id passed in endpoints",
    async () => {
      const options = {
          path: `/${STAGE}/${VERSION}/services/order/`,
        ...commonOptionsGET,
      };
      try {
        const response = await NAModule(postData, options);
        expect(response.message).toBe(`Authorization header requires 'Credential' parameter. Authorization header requires 'Signature' parameter. Authorization header requires 'SignedHeaders' parameter. Authorization header requires existence of either a 'X-Amz-Date' or a 'Date' header. Authorization=${TOKEN}`);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

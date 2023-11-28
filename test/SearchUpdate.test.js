const {
  STAGE,
  VERSION,
  commonOptionsPUTwithoutHeader,
  Timeout,
} = require("../config");
const options = {
  ...commonOptionsPUTwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/searcher/update`,
};
const NAModule = require("../modules/NAModule");

const { success } = require("../RequestBodies/SearchUpdateBodies");
test(
    "API Success",
    async () => {
      const postData = JSON.stringify(success);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg.length >=1).toBe(true);
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );


  test(
    "BAD Request",
    async () => {
      const postData = JSON.stringify({});
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'orders'");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
 test(
    "orders is missing ",
    async () => {
      const postData = JSON.stringify({"orders":""});
      try {
        const response = await NAModule(postData, options);
        expect(response.Code).toBe("InternalServerError");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );

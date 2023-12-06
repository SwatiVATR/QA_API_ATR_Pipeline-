const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/searcher/update`,
  };
  const NAModule = require("../../modules/NAModule");
  
  const { success } = require("../../RequestBodies/SearchUpdateBodies");
  test(
      "API Success",
      async () => {
        const postData = JSON.stringify(success);
        try {
          const response = await NAModule(postData, options);
          expect(response.success?true:false).toBe(true);
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
  
  
    test(
      "Plain text received as response",
      async () => {
        const postData = JSON.stringify({});
        try {
          const response = await NAModule(postData, options);
          expect(response.success?true:false).toBe(true);
        } catch (error) {
          throw new Error(error);
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
          expect(response.success?true:false).toBe(true);
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
  
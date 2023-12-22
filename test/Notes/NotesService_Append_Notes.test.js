const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/notes/update`,
  };
  const NAModule = require("../../modules/NAModule");
  
  const { success } = require("../../RequestBodies/NotesUpdateBody");
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify(success);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.statusCode).toBe(200);
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
        expect(response.error).toBe("'order'");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  test(
    "orders is missing ",
    async () => {
      const postData = JSON.stringify({"order":""}
      );
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
  
  test(
    "order note is missing ",
    async () => {
      const postData = JSON.stringify({"order":{"note":""}}
  
      );
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'str' object does not support item assignment");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
  
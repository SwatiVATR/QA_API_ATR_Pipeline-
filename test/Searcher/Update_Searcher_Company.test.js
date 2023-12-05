const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/searcherCompany/134522`,
  };
  const NAModule = require("../../modules/NAModule");
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        searchCompany: { SCOMP_Code: "ABC", SCOMP_Company: "Test Inc." },
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg).toBe("Updated successfully");
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
        expect(response.error).toBe("'searchCompany'");
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  test(
    "searchCompany is missing ",
    async () => {
      const postData = JSON.stringify({ searchCompany: "" });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
        );
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
const {
    STAGE,
    VERSION,
    commonOptionsPUTwithoutHeader,
    Timeout,
  } = require("../../config");
  const options = {
    ...commonOptionsPUTwithoutHeader,
    path: `/${STAGE}/${VERSION}/services/order-authenticate`,
  };
  const NAModule = require("../../modules/NAModule");
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        username: "a855b49b-6d5e-4145-a0a1-ecf393c017ce",
        password: "Msingh@123",
      });
      try {
        const response = await NAModule(postData, options);
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
  test(
    "Username is missing",
    async () => {
      const postData = JSON.stringify({ username: "", password: "Msingh@123" });
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
  test(
    "Password is missing",
    async () => {
      const postData = JSON.stringify({
        username: "a855b49b-6d5e-4145-a0a1-ecf393c017ce",
        password: "",
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.statusCode).toBe(500);
      } catch (error) {
        throw new Error();
      }
    },
    Timeout
  );
  
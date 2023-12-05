const {
    STAGE,
    VERSION,
    commonOptionsPOSTBasicAUTH,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  const options = {
    path: `/${STAGE}/${VERSION}/webhook/order/ramquest/note`,
    ...commonOptionsPOSTBasicAUTH,
  };
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        orderId: "7b04e568-688c-4f38-8ed9-682e5a3334b8",
        serviceId: "3e69b815-733f-4a3b-bd6d-5acd68cd9fa5",
        note: "hello from postman",
        status: "",
      });
      try {
        const response = await NAModule(postData, options);
        expect(response.message).toBe("hello from postman");
      } catch (error) {
        throw new Error(error);
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
        } catch (error) {
          throw new Error(error);
        }
    },
    Timeout
  );
  
  
  test(
      "orderId is missing",
      async () => {
        const postData = JSON.stringify({
          orderId: "",
          serviceId: "3e69b815-733f-4a3b-bd6d-5acd68cd9fa5",
          note: "hello from postman",
          status: "",
        });
        try {
          const response = await NAModule(postData, options);
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
  
  
    test(
      "invalid orderId ",
      async () => {
        const postData = JSON.stringify({
          "orderId": "sdsds",
          "serviceId": "3e69b815-733f-4a3b-bd6d-5acd68cd9fa5",
          "note": "hello from postman",
          "status": ""
        });
        try {
          const response = await NAModule(postData, options);
          expect(response.errors[0]).toBe("The value 'sdsds' is not valid.");
  
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
  
    test(
      "serviceId is missing",
      async () => {
        const postData = JSON.stringify({
          orderId: "7b04e568-688c-4f38-8ed9-682e5a3334b8",
          serviceId: "",
          note: "hello from postman",
          status: "",
        });
        try {
          const response = await NAModule(postData, options);
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
  
    test(
      "invalid serviceId ",
      async () => {
        const postData = JSON.stringify({
          "orderId": "7b04e568-688c-4f38-8ed9-682e5a3334b8",
          "serviceId": "wdsdsd",
          "note": "hello from postman",
          "status":123
        });
        try {
          const response = await NAModule(postData, options);
          expect(response.errors[0]).toBe("The value 'wdsdsd' is not valid.");
  
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
    test(
      "note is missing",
      async () => {
        const postData = JSON.stringify({
          "orderId": "7b04e568-688c-4f38-8ed9-682e5a3334b8",
          "serviceId": "3e69b815-733f-4a3b-bd6d-5acd68cd9fa5",
          "note": "",
          "status": ""
        });
        try {
          const response = await NAModule(postData, options);
        } catch (error) {
          throw new Error(error);
        }
      },
      Timeout
    );
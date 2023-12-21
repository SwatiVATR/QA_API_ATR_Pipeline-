const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    Timeout,
  } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    path: `/${STAGE}/${VERSION}/services/current_duedate_update`,
    ...commonOptionsPOST,
  };
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify({
        "transaction_id": "5093",
        "dueDate": 1
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.success).toBe(
          "Due date and note updated successfully."
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "transaction_id is passed wrong",
    async () => {
      const postData = JSON.stringify({
        "transaction_id": "509wdewfewewd3",
        "dueDate": 1
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "Transaction not found."
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "transaction_id is missing",
    async () => {
      const postData = JSON.stringify({
        "transaction_id": "",
        "dueDate": 1
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "transaction_id and due date are required."
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
 
  test(
    "transaction_id is not passed in body",
    async () => {
      const postData = JSON.stringify({
        "dueDate": 1
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "transaction_id and due date are required."
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "dueDate is missing",
    async () => {
      const postData = JSON.stringify({
        "transaction_id": "5093",
        "dueDate": ""
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "invalid literal for int() with base 10: ''"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "dueDate is passed as string or special characters",
    async () => {
      const postData = JSON.stringify({
        "transaction_id": "5093",
        "dueDate": "wasds@233232"
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "invalid literal for int() with base 10: 'wasds@233232'"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );

  test(
    "Bad Request",
    async () => {
      const postData = JSON.stringify({
    });
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "int() argument must be a string, a bytes-like object or a number, not 'NoneType'"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
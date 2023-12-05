const {
    CommentUpdateBody,
    Emptyorder,
    BADBody,
    Emptytransaction,
    Wrongorder,
    Wrongid,
    statusInactive,
    statusHold
  } = require("../../RequestBodies/CommentUpdateBody");
  const { STAGE, VERSION, commonOptionsPUT, Timeout } = require("../../config");
  const NAModule = require("../../modules/NAModule");
  
  const options = {
    path: `/${STAGE}/${VERSION}/services/comments/update`,
    ...commonOptionsPUT,
  };
  
  test(
    "API Success",
    async () => {
      const postData = JSON.stringify(CommentUpdateBody);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg.length >= 1).toBe(true);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "order is missing",
    async () => {
      const postData = JSON.stringify(Emptyorder);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "transaction is missing",
    async () => {
      const postData = JSON.stringify(Emptytransaction);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "local variable '_where' referenced before assignment"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "BAD Request",
    async () => {
      const postData = JSON.stringify(BADBody);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'order'");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "Wrong order is passed",
    async () => {
      const postData = JSON.stringify(Wrongorder);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe(
          "Invalid data or url or filepath argument: 3434e3\nInvalid data type: <class 'float'>, expected dict or list."
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  
  test(
    "id is wrong",
    async () => {
      const postData = JSON.stringify(Wrongid);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
  0      );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "status is Inactive",
    async () => {
      const postData = JSON.stringify(statusInactive);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
  0      );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  test(
    "status is hold",
    async () => {
      const postData = JSON.stringify(statusHold);
      try {
        const response = await NAModule(postData, options);
        expect(response.success.msg[0].transaction).toBe(
  0      );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
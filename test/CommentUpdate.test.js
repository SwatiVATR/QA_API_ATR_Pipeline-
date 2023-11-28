const { CommentUpdateBody,Emptyorder,BADBody,Emptytransaction } = require("../RequestBodies/CommentUpdateBody");
const { STAGE, VERSION, commonOptionsPUT, Timeout } = require("../config");
const NAModule = require("../modules/NAModule");

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
      expect(response.success.correlationId ).toBe(
        0
      );
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
      expect(response.error).toBe("Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)");
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
      expect(response.error).toBe("local variable '_where' referenced before assignment");
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

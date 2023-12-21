const { STAGE, VERSION, commonOptionsPOST,Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {TransactionId_None,TransactionId_SpecialCharacters,TransactionId_Empty}=require("../../RequestBodies/Callback_Deliver_Title_Order_PRODBody")
const options = {
  path: `/${STAGE}/${VERSION}/services/normalize/ramquest`,
  ...commonOptionsPOST,
};

test(
  "transactionId is None",
  async () => {
    const postData = JSON.stringify(TransactionId_None);
    try {
      const response = await NAModule(postData, options);
      expect(response.error).toBe("transactionId");
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);


test(
    "transactionId passed with special characters",
    async () => {
      const postData = JSON.stringify(TransactionId_SpecialCharacters);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("transactionId");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
  
  test(
    "transactionId is empty",
    async () => {
      const postData = JSON.stringify(TransactionId_Empty);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("transactionId");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );



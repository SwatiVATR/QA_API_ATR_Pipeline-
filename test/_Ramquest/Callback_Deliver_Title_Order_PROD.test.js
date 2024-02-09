const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { TransactionId_None, TransactionId_SpecialCharacters, TransactionId_Empty } = require("../../RequestBodies/Callback_Deliver_Title_Order_PRODBody")
const options = {
  path: `/${STAGE}/${VERSION}/services/normalize/ramquest`,
  ...commonOptionsPOST,
};
it('transactionId is None', async () => {
  const postData = JSON.stringify(TransactionId_None);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + response.error)
  } catch (error) {
    throw new Error(error);
  }
}, Timeout)

it('transactionId passed with special characters', async () => {
  const postData = JSON.stringify(TransactionId_SpecialCharacters);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + response.error)
  } catch (error) {
    throw new Error(error);
  }
}, Timeout)
it('transactionId is empty', async () => {
  const postData = JSON.stringify(TransactionId_Empty);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + response.error)
  } catch (error) {
    throw new Error(error);
  }
}, Timeout)






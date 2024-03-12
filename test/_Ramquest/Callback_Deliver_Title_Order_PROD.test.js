const { STAGE, VERSION, commonOptionsPOST, Timeout,commonOptionsPOSTwithoutHeader} = require("../../config");
const NAModule = require("../../modules/NAModule");
const { TransactionId_None, TransactionId_SpecialCharacters, TransactionId_Empty } = require("../../RequestBodies/Callback_Deliver_Title_Order_PRODBody")
const options = {
  path: `/${STAGE}/${VERSION}/services/normalize/ramquest`,
  ...commonOptionsPOST,
};
let response;

it('transactionId is None', async () => {
  const postData = JSON.stringify(TransactionId_None);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    response = await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + JSON.stringify(response))
  } catch (error) {
    throw new Error(JSON.stringify(response));
  }
}, Timeout)

it('transactionId passed with special characters', async () => {
  const postData = JSON.stringify(TransactionId_SpecialCharacters);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    response= await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + JSON.stringify(response))
  } catch (error) {
    throw new Error(JSON.stringify(response));
  }
}, Timeout)

it('transactionId is empty', async () => {
  const postData = JSON.stringify(TransactionId_Empty);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    response = await NAModule(postData, options);
    expect(response.error).toBe("transactionId");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + JSON.stringify(response))
  } catch (error) {
    throw new Error(JSON.stringify(response));
  }
}, Timeout)

it('Session expired', async () => {
  const options = {
    path: `/${STAGE}/${VERSION}/services/normalize/ramquest`,
    ...commonOptionsPOSTwithoutHeader,
  };
  const postData = JSON.stringify(TransactionId_None);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    response = await NAModule(postData, options);
    expect(response.error).toBe("Invalid Session");
    reporter.endStep();
    reporter.testId("API Endpoint-/services/normalize/ramquest")
    reporter.description("Response message from API:" + JSON.stringify(response))
  } catch (error) {
    throw new Error(JSON.stringify(response));
  }
}, Timeout)




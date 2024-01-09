const { STAGE, VERSION,commonOptionsPOST,Timeout } = require("../../config");
const {NormalizeQualiaBody,NormalizeQualiaWithoutOrderBody,BadBody} =require('../../RequestBodies/NormalizeQualiaBody')
const NAModule = require("../../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/normalize/qualia?json`,
  ...commonOptionsPOST,
};
it('API Success', async () => {
  const postData = JSON.stringify(NormalizeQualiaBody);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
      expect(response.success.credentials.agencyPortalId.length >= 1).toBe(
        true
      );
      reporter.endStep();
  } catch (error) {
      throw new Error(error);
  }
},Timeout)
it('order is missing', async () => {
  const postData = JSON.stringify(NormalizeQualiaWithoutOrderBody);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
      expect(response.error).toBe("Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)");
 
      reporter.endStep();
  } catch (error) {
      throw new Error(error);
  }
},Timeout)
it('BAD REQUEST', async () => {
  const postData = JSON.stringify(BadBody);
  try {
    reporter.startStep("Values passed:" + JSON.stringify(postData));
    const response = await NAModule(postData, options);
        expect(response.error).toBe("'order'");
      reporter.endStep();
  } catch (error) {
      throw new Error(error);
  }
},Timeout)

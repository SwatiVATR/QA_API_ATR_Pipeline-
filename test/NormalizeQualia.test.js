const { STAGE, VERSION,commonOptionsPOST,Timeout } = require("../config");
const {NormalizeQualiaBody,NormalizeQualiaWithoutOrderBody,BadBody} =require('../RequestBodies/NormalizeQualiaBody')
const NAModule = require("../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/normalize/qualia?json`,
  ...commonOptionsPOST,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify(NormalizeQualiaBody);
    try {
      const response = await NAModule(postData, options);
      expect(response.success.credentials.agencyPortalId.length >= 1).toBe(
        true
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
      const postData = JSON.stringify(NormalizeQualiaWithoutOrderBody);
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
    "BAD REQUEST",
    async () => {
      const postData = JSON.stringify(BadBody);
      try {
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'order'");
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
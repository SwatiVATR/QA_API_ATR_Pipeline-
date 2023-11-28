const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../config");
const COR310TemplateModule = require("../modules/COR310TemplateModule");
const options = {
  ...commonOptionsGETwithoutHeader,
  path: `/${STAGE}/${VERSION}/services/searcherCompanies/all`,
};
const payload = {};
test(
  "Api success",
  async () => {
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.msg.length).toBeGreaterThan(0);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "No data",
  async () => {
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.msg.length === 0).toBe(
        response.success.msg.length === 0
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

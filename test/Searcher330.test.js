const {
  STAGE,
  VERSION,
  commonOptionsGETwithoutHeader,
  Timeout,
} = require("../config");
const COR310TemplateModule = require("../modules/COR310TemplateModule");

test(
  "Api success",
  async () => {
    const payload = {};

    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/searcher/330`,
    };

    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.msg.length>=1).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
    "Wrong searcher id",
    async () => {
      const payload = {};
  
      const options = {
        ...commonOptionsGETwithoutHeader,
        path: `/${STAGE}/${VERSION}/services/searcher/111111111111111`,
      };
  
      try {
        const response = await COR310TemplateModule(options, payload);
  
        expect(response.success.msg.length>=1).toBe(false);
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );
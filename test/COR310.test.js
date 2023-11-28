const { STAGE, VERSION, commonOptionsGET,commonOptionsGETwithoutHeader,Timeout} = require('../config');
const COR310TemplateModule = require('../modules/COR310TemplateModule');

test("API SUCCESS", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=desc`,
    };
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.correlationId).toBe(1);
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);
  
  test("BAD REQUEST", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders`,
    };
  
    const responseData = await COR310TemplateModule(options, payload);
  
    try {
      const data = JSON.parse(responseData);
      expect(data).toBe(null);
    } catch (error) {
      console.log(error);
    }
  }, Timeout);
  
  test("No AUTH TOKEN||INVALID SESSION", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.error).toBe("Invalid Session");
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);
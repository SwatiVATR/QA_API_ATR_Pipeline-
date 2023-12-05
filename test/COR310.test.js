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

      expect(response.success.count!==0).toBe(true);
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
      throw new Error(error);
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


  test("status is in progress ", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=progress&offset=0&limit=100&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.count===0).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);


  test("status is active ", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=active&offset=0&limit=100&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.count!==0).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);

  test("status is a number", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=inprogress&offset=0&limit=100&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.count!==0).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);


  test("string is passed in offset", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=cxdxc&limit=100&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.error).toBe("invalid literal for int() with base 10: 'cxdxc'");
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);


  test("string is passed in limit", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit="fedfDF"&sort=desc`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.error).toBe("invalid literal for int() with base 10: '\"fedfDF\"'");
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);


  test("any data is passed to sort", async () => {
    const payload = {};
  
    const options = {
      ...commonOptionsGETwithoutHeader,
      path: `/${STAGE}/${VERSION}/services/enhance-listorders?status=hold&offset=0&limit=100&sort=@`,
    };
  
    try {
      const response = await COR310TemplateModule(options, payload);

      expect(response.success.count!==0).toBe(true);
    } catch (error) {
      throw new Error(error);
    }
  }, Timeout);
const { STAGE, VERSION, commonOptionsGET, Timeout } = require("../../config");
const OrderModule = require("../../modules/OrderModule");
it('API Success',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?status=&offset=0&limit=100&sort=DESC`,
    };
    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.success.msg.results.length >= 1).toBe(true);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/orders?status=&offset=0&limit=100&sort=DESC")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('parameter missing',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?status=&offset=&limit=&sort=DESC`,
    };
    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.error).toEqual("invalid literal for int() with base 10: ''");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/orders?status=&offset=&limit=&sort=DESC")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('status is required',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?limit=10&sort=ASC`,
    };
    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.error).toEqual("'status'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/orders?limit=10&sort=ASC")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('invalid status is passed',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?status=sdsds&offset=0&limit=100&sort=DESC`,
    };

    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.success.msg.results.length >= 1).toEqual(false);
      reporter.endStep();
      reporter.testId("API Endpoint-/services/orders?status=sdsds&offset=0&limit=100&sort=DESC")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)


it('invalid offset is passed',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?status=active&offset=dvbfv&limit=100&sort=DESC`,
    };

    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.error).toEqual("invalid literal for int() with base 10: 'dvbfv'");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/orders?status=active&offset=dvbfv&limit=100&sort=DESC")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

it('invalid limit is passed',
  async () => {
    const options = {
      ...commonOptionsGET,
      path: `/${STAGE}/${VERSION}/services/orders?status=active&offset=&limit=1sdsds00&sort=DESC`,
    };

    try {
      reporter.startStep("parameters passed:" + JSON.stringify(options));
      const responseData = await OrderModule(options);
      const data = JSON.parse(responseData);
      expect(data.error).toEqual("invalid literal for int() with base 10: ''");
      reporter.endStep();
      reporter.testId("API Endpoint-/services/normalize/ramquest")
      reporter.description("Response message from API:" + data)
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
)

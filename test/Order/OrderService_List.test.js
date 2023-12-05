const {STAGE,VERSION,commonOptionsGET,Timeout} = require("../../config");
const OrderModule = require("../../modules/OrderModule");

test("API Success", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?status=&offset=0&limit=100&sort=DESC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.success.msg.results.length>=1).toBe(true);
  } catch (error) {
    throw new Error(error);
  }
},Timeout);

test("parameter missing", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?status=&offset=&limit=&sort=DESC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.error).toEqual("invalid literal for int() with base 10: ''");
  } catch (error) {
    throw new Error(error);
  }
},Timeout);


test("status is required", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?limit=10&sort=ASC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.error).toEqual("'status'");
  } catch (error) {
    throw new Error(error);
  }
},Timeout);


test("invalid status is passed", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?status=sdsds&offset=0&limit=100&sort=DESC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.success.msg.results.length>=1).toEqual(false);
  } catch (error) {
    throw new Error(error);
  }
},Timeout);


test("invalid offset is passed", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?status=active&offset=dvbfv&limit=100&sort=DESC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.error).toEqual("invalid literal for int() with base 10: 'dvbfv'");
  } catch (error) {
    throw new Error(error);
  }
},Timeout);

test("invalid limit is passed", async () => {
  const options = {
    ...commonOptionsGET,
    path: `/${STAGE}/${VERSION}/services/orders?status=active&offset=&limit=1sdsds00&sort=DESC`,
  };

  try {
    const responseData = await OrderModule(options);
    const data = JSON.parse(responseData);
    expect(data.error).toEqual("invalid literal for int() with base 10: ''");
  } catch (error) {
    throw new Error(error);
  }
},Timeout);
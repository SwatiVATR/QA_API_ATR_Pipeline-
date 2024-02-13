
const { STAGE, VERSION, commonOptionsGET, Timeout,commonOptionsGETwithoutHeader} = require("../../config");
const NAModule = require("../../modules/NAModule");

it(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=0&limit=100&sort=DESC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=received&offset=0&limit=100&sort=DESC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
it(
    "Status is changed to Hold",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=Hold&offset=0&limit=100&sort=DESC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=Hold&offset=0&limit=100&sort=DESC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
it(
    "offset value is changed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=100&limit=100&sort=DESC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=received&offset=100&limit=100&sort=DESC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
it(
    "Limit value is changed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=100&limit=100&sort=ASC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=received&offset=100&limit=100&sort=ASC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "sort value is changed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=100&limit=100&sort=DESC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=received&offset=100&limit=100&sort=DESC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "invalid value is passed to status",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=12&offset=0&limit=100&sort=ASC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBe(0);
            reporter.testId("API Endpoint-/services/orders?status=12&offset=0&limit=100&sort=ASC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "invalid value is passed to offset",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=12&offset=abc&limit=100&sort=ASC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe("invalid literal for int() with base 10: 'abc'");
            reporter.testId("API Endpoint-/services/orders?status=12&offset=abc&limit=100&sort=ASC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "invalid value is passed to limit",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=0&limit=dscds&sort=ASC`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe("invalid literal for int() with base 10: 'dscds'");
            reporter.testId("API Endpoint-/services/orders?status=received&offset=0&limit=dscds&sort=ASC")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "invalid value is passed to sort",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received&offset=0&limit=100&sort=1323asas`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeGreaterThan(0);
            reporter.testId("API Endpoint-/services/orders?status=received&offset=0&limit=100&sort=1323asas")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

it(
    "No values passed in parameters",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=&offset=&limit=&sort=`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe("invalid literal for int() with base 10: ''");
            reporter.testId("API Endpoint-/services/orders?status=&offset=&limit=&sort=")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
it(
    "Invalid session",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=&offset=&limit=&sort=`,
            ...commonOptionsGETwithoutHeader,
        };
        const postData = JSON.stringify({});
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.testId("API Endpoint-/services/orders?status=&offset=&limit=&sort=")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
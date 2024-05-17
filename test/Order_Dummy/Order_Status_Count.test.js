// Order listing on the dashboard with a total count of pending, in progress, completed, canceled, 
// and all orders, along with filter query parameters."
const { STAGE, VERSION, commonOptionsGET, Timeout,commonOptionsGETwithoutHeader} = require("../../config");
const NAModule = require("../../modules/NAModule");
let response;
it(
    "passing progress parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=progress`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=progress")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "passing received parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=received`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=received")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "passing done parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=done`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=done")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "passing ignore parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=ignore`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=ignore")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "passing all parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=all`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=all")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "passing any garabage parameter to the endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=esdesd@3434w43`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=esdesd@3434w43")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "no parameter is passed to endpoint",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=`,
            ...commonOptionsGET,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.testId("API Endpoint-/services/orders?status=")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Token is missing",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/orders?status=progress`,
            ...commonOptionsGETwithoutHeader,
        };
        const postData = JSON.stringify({});
        try {
            response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.testId("API Endpoint-/services/orders?status=progress")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
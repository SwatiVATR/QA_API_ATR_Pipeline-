// Search for any order in the dashboard based on the search with file number and status.
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    commonOptionsGETwithoutHeader,
    Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});
let response;
it(
    "when passed filenumber=new&status=received",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=new&status=received`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=new&status=received")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed  filenumber=new&status=progress",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=new&status=progress`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=new&status=progress")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed filenumber=new&status=done",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=new&status=done`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=new&status=done")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed filenumber=new&status=ignore",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=new&status=ignore`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=new&status=ignore")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed filenumber=new&status=all",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=new&status=all`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=new&status=all")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed filenumber=@@@@&status=",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=@@@@&status=`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toEqual(0);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=@@@@&status=")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "when passed filenumber=&status=",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=&status=`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.count).toBeDefined();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=&status=")
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
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/orders?status=ignore&filenumber=SmartSearch`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/orders?status=ignore&filenumber=SmartSearch")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
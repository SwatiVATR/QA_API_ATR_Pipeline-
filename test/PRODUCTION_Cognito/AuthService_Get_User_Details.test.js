const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
    commonOptionsGETwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const postData = ""
const EMAIL=process.env.SWATI_USER_EMAIL
let response;
it(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=${EMAIL}`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=${EMAIL}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "invalid email address passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=ad${EMAIL}df`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=${EMAIL}df`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "No email is passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "Invalid session",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=${EMAIL}`,
            ...commonOptionsGETwithoutHeader,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=${EMAIL}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
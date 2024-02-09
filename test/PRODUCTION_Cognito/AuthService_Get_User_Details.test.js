const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const postData = ""
const EMAIL=process.env.SWATI_USER_EMAIL
it(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=${EMAIL}`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=${EMAIL}`)
            reporter.description("Response message from API:" + response)
        } catch (error) {
            throw new Error(error);
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
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=${EMAIL}df`)
            reporter.description("Response message from API:" + response)
        } catch (error) {
            throw new Error(error);
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
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
            reporter.endStep();
            reporter.testId(`API Endpoint-/user?email=`)
            reporter.description("Response message from API:" + response)
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
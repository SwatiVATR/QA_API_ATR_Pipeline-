const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    Timeout,
    commonOptionsGET,
    commonOptionsGETwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = "";
const USER = process.env.SWATI_USER_EMAIL
let response;

test(
    "Api success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=${USER}`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(200);
            reporter.endStep();
            reporter.testId(`API Endpoint-/services/invoker/cognito/getUser?email=${USER}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

test(
    "Wrong email passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=abc${USER}`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("User not found for the provided email.");
            reporter.endStep();
            reporter.testId(`API Endpoint-/services/invoker/cognito/getUser?email=abc${USER}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
test(
    "Email is not passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId(`API Endpoint-/services/invoker/cognito/getUser?email=`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

test(
    "Login token is not passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/invoker/cognito/getUser?email=${USER}`,
            ...commonOptionsGETwithoutHeader,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.endStep();
            reporter.testId(`API Endpoint-/services/invoker/cognito/getUser?email=${USER}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsPOSTwithoutHeader,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signin-dev`,
    ...commonOptionsPOSTwithoutHeader,
};

const USER1 = process.env.SWATI_USER_EMAIL
const PASSWORD1 = process.env.SWATI_PASSWORD
let response;
test(
    "API Success",
    async () => {
        const postData = JSON.stringify({
            "username": USER1,
            "password": PASSWORD1
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "username is missing",
    async () => {
        const postData = JSON.stringify({
            "username": "",
            "password": PASSWORD1
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "username is passed wrong",
    async () => {
        const postData = JSON.stringify({
            "username": "USER1",
            "password": PASSWORD1
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "password is missing",
    async () => {
        const postData = JSON.stringify({
            "username": USER1,
            "password": ""
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "password is passed wrong",
    async () => {
        const postData = JSON.stringify({
            "username": USER1,
            "password": "password"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "Empty body is passed",
    async () => {
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Username and Password Required");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "username and password both are missing",
    async () => {
        const postData = JSON.stringify({
            "username": "",
            "password": ""
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/signin-dev")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);


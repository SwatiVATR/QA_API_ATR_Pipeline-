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
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/signup-dev`,
    ...commonOptionsPOSTwithoutHeader,
};
let response;
test(
    "username is missing",
    async () => {
        const postData = JSON.stringify({
            "username": "",
            "password": "PASSWORD1"
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
            "username": "USER1",
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
    "username and password is missing",
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
test(
    "invalid username is passed",
    async () => {
        const postData = JSON.stringify({
            "username": 8888888888,
            "password": "PASSWORD1"        
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
    "Sign up success",
    async () => {
        const postData = JSON.stringify({
            'username': 'sdoglu1@actiontitleresearch.com',
            'password': 'Starbuxstarbux1!'
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

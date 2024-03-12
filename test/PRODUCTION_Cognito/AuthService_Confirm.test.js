const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    Timeout,
    commonOptionsPOSTwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const options = {
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/confirm`,
    ...commonOptionsPOST,
};
const optionsWithoutAuth = {
    path: `/${STAGE}/${VERSION}/services/invoker/cognito/confirm`,
    ...commonOptionsPOSTwithoutHeader,
};
const Email = process.env.SWATI_USER_EMAIL
let response;
it(
    "API Success",
    async () => {
        const postData = JSON.stringify({
            "email": Email,
            "code": 486945,
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "Email is missing",
    async () => {
        const postData = JSON.stringify({
            "email": "",
            "code": 486945,
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "Invalid email entered",
    async () => {
        const postData = JSON.stringify({
            "email": "dsfewsdwsad",
            "code": 486945,
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);



it(
    "invalid code is passed",
    async () => {
        const postData = JSON.stringify({
            "email": Email,
            "code": "wsdufs",
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "code is missing",
    async () => {
        const postData = JSON.stringify({
            "email": Email,
            "code": "",
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "newPassword is missing",
    async () => {
        const postData = JSON.stringify({
            "email": Email,
            "code": 486945,
            "newPassword": ""
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "all fields are empty",
    async () => {
        const postData = JSON.stringify({
            "email": "",
            "code": "",
            "newPassword": ""
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);

it(
    "Bad Request",
    async () => {
        const postData = JSON.stringify({
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, options);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);


it(
    "No Auth key is passed in authorization",
    async () => {
        const postData = JSON.stringify({
            "email": Email,
            "code": 486945,
            "newPassword": "MyPasswerd!#$123"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response= await NAModule(postData, optionsWithoutAuth);
            expect(response.statusCode).toBe(500);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/invoker/cognito/confirm")
            reporter.description("Response message from API:"+ JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
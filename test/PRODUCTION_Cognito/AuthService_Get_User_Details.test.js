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
test(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=${EMAIL}`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "invalid email address passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=ad${EMAIL}df`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "No email is passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.correlationId).toBe(1);
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");

const postData = ""
test(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/user?email=sverma@actiontitleresearch.com`,
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
            path: `/${STAGE}/${VERSION}/user?email=sadwadwasdw@actiontitlerwqaswdesearch.com`,
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
            path: `/${STAGE}/${VERSION}/user?email=sadwadwasdw@actiontitlerwqaswdesearch.com`,
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
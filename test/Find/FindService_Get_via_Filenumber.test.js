const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});

test(
    "API Success",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=Test&status=`,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.msg.count).toBe(0);

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);



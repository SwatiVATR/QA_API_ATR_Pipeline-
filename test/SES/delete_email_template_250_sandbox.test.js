const {
    STAGE,
    VERSION,
    commonOptionsDELETE,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");


const postData = JSON.stringify({});
test(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/delete-template/testabc`,
            ...commonOptionsDELETE,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.message).toBe(
                "Template 'testabc' deleted successfully"
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);



test(
    "special characters in endpoints",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/delete-template/@@@#$$DD`,
            ...commonOptionsDELETE,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.message).toBe(
                "Template '@@@' deleted successfully"
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
const {
    STAGE,
    VERSION,
    commonOptionsDELETE,
    Timeout,
    commonOptionsDELETEwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});
let response;
it(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/delete-template/testabc`,
            ...commonOptionsDELETE,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));

            response= await NAModule(postData, options);
            expect(response.message).toBe(
                "Template 'testabc' deleted successfully"
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/delete-template/testabc")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);



it(
    "special characters in endpoints",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/delete-template/@@@#$$DD`,
            ...commonOptionsDELETE,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));

            response= await NAModule(postData, options);
            expect(response.message).toBe(
                "Template '@@@' deleted successfully"
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/delete-template/@@@#$$DD")
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
            path: `/${STAGE}/${VERSION}/services/delete-template/@@@#$$DD`,
            ...commonOptionsDELETEwithoutHeader,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));

            response= await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/delete-template/@@@#$$DD")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
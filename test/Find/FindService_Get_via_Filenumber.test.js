const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");
const postData = JSON.stringify({});

it(
    "API Success",
    async () => {
        const options = {
            ...commonOptionsGET,
            path: `/${STAGE}/${VERSION}/services/search?filenumber=Test&status=`,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.msg).toBeTruthy();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/search?filenumber=Test&status=")
            reporter.description("Response message from API:" + response)
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);



const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");


const postData = JSON.stringify({});
it('API Success',
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/159306/0`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.txId).toBe(
                "159306"
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/159306/0")
            reporter.description("Response message from API:"+JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('Special characters passed to txId',
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/@@@@@/0`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.txId).toBe("@@@@@");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/@@@@@/0")
            reporter.description("Response message from API:"+JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('txId is not passed',
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes//0`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success).toBeTruthy();
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes//0")
            reporter.description("Response message from API:"+JSON.stringify(response))
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
//COR-538, this endpoint will be called from searcher portal to list all organization profiles
// the searcher can create order for the listed organizations.
const {
    STAGE,
    VERSION,
    commonOptionsGETwithoutHeader,
    Timeout,
} = require("../../config");

const NAModule = require("../../modules/NAModule");
let response;
it(
    "API Success",
    async () => {
        const searcherQuery = encodeURIComponent("Action Title Research");
        const options = {
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/clientCompanies?searcher=${searcherQuery}`,
        };
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.length).toBeGreaterThan(0);
            reporter.endStep();
            reporter.testId(`/${STAGE}/${VERSION}/services/clientCompanies?searcher=${searcherQuery}`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "invalid searcher is passed",
    async () => {
        const options = {
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/clientCompanies?searcher=xyz`,
        };
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.length).toEqual(0);
            reporter.endStep();
            reporter.testId(`/${STAGE}/${VERSION}/services/clientCompanies?searcher=xyz`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "special character passed in searcher",
    async () => {
        const options = {
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/clientCompanies?searcher=@@@`,
        };
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.length).toEqual(0);
            reporter.endStep();
            reporter.testId(`/${STAGE}/${VERSION}/services/clientCompanies?searcher=@@@`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "empty searcher is passed",
    async () => {
        const options = {
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/clientCompanies?searcher=`,
        };
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg.length).toBeGreaterThan(0);
            reporter.endStep();
            reporter.testId(`/${STAGE}/${VERSION}/services/clientCompanies?searcher=`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "searcher parameter is not passed",
    async () => {
        const options = {
            ...commonOptionsGETwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/clientCompanies`,
        };
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            reporter.endStep();
            reporter.testId(`/${STAGE}/${VERSION}/services/clientCompanies`)
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success,
    successAppend,
    buttonIdMissing,
    invalidButtonId,
    orderIdMissing,
    invalidOrderId,
    search_company_id_String,
    appendNoteMissing,
    transactionId_String,
    userEmailMissing,
    invalidUserEmail,
    InvalidSearch_company_id,
    Search_company_id_Missing
} = require("../../RequestBodies/COR-470-Body")
const options = {
    path: `/${STAGE}/${VERSION}/services/notes/special-request`,
    ...commonOptionsPOST,
};
it('API Success without appended_note key',
    async () => {
        const postData = JSON.stringify(success);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Rush note has been added successfully");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success with appended_note key',
    async () => {
        const postData = JSON.stringify(successAppend);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('button_id key is empty',
    async () => {
        const postData = JSON.stringify(buttonIdMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID parameter is missing.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('button_id key passed wrong',
    async () => {
        const postData = JSON.stringify(invalidButtonId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID not found.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('order_id is empty',
    async () => {
        const postData = JSON.stringify(orderIdMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('order_id key passed wrong',
    async () => {
        const postData = JSON.stringify(invalidOrderId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('search_company_id is passed as string',
    async () => {
        const postData = JSON.stringify(search_company_id_String);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('search_company_id is passed as invalid',
    async () => {
        const postData = JSON.stringify(InvalidSearch_company_id);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID not found.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('search_company_id is not passed',
    async () => {
        const postData = JSON.stringify(Search_company_id_Missing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('appended_note is passed empty',
    async () => {
        const postData = JSON.stringify(appendNoteMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Rush note has been added successfully");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('transactionId is passed as string',
    async () => {
        const postData = JSON.stringify(transactionId_String);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('userEmail is empty',
    async () => {
        const postData = JSON.stringify(userEmailMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('invalid userEmail passed',
    async () => {
        const postData = JSON.stringify(invalidUserEmail);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
// The message is sent to all recipients who have a similar button_id, 
// where the button_id can be "Rush," "Rundown," etc.
const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    commonOptionsPOSTwithoutHeader,
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
let response;
it('API Success without appended_note key',
    async () => {
        const postData = JSON.stringify(success);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Rush note has been added successfully");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('API Success with appended_note key',
    async () => {
        const postData = JSON.stringify(successAppend);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('button_id key is empty',
    async () => {
        const postData = JSON.stringify(buttonIdMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID parameter is missing.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('button_id key passed wrong',
    async () => {
        const postData = JSON.stringify(invalidButtonId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID not found.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('order_id is empty',
    async () => {
        const postData = JSON.stringify(orderIdMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('order_id key passed wrong',
    async () => {
        const postData = JSON.stringify(invalidOrderId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('search_company_id is passed as string',
    async () => {
        const postData = JSON.stringify(search_company_id_String);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('search_company_id is passed as invalid',
    async () => {
        const postData = JSON.stringify(InvalidSearch_company_id);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Button ID not found.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('search_company_id is not passed',
    async () => {
        const postData = JSON.stringify(Search_company_id_Missing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('appended_note is passed empty',
    async () => {
        const postData = JSON.stringify(appendNoteMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Rush note has been added successfully");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('transactionId is passed as string',
    async () => {
        const postData = JSON.stringify(transactionId_String);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('userEmail is empty',
    async () => {
        const postData = JSON.stringify(userEmailMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('invalid userEmail passed',
    async () => {
        const postData = JSON.stringify(invalidUserEmail);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('Token is missing',
    async () => {
        const postData = JSON.stringify(success);
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/special-request`,
            ...commonOptionsPOSTwithoutHeader,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid Session");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
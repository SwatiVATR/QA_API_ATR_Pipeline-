const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const { successAppended, success, buttonIdMissing, buttonIdWrong, WithoutButtonID, order_idMissing, order_idWrong, Withoutorder_id, orderMissing } = require("../../RequestBodies/SpecialRequestBody")
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
        const postData = JSON.stringify(successAppended);
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
it('button_id is missing',
    async () => {
        const postData = JSON.stringify(buttonIdMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID parameter is missing."
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")

            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('button_id is passed wrong or special characters passed to button_id',
    async () => {
        const postData = JSON.stringify(buttonIdWrong);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID not found."
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")

            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('button_id is not passed in body',
    async () => {
        const postData = JSON.stringify(WithoutButtonID);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID parameter is missing."
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('order_id is missing',
    async () => {
        const postData = JSON.stringify(order_idMissing);
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

it('order_id is passed wrong',
    async () => {
        const postData = JSON.stringify(order_idWrong);
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
it('order_id is not passed in body',
    async () => {
        const postData = JSON.stringify(Withoutorder_id);
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

it('order is passed empty',
    async () => {
        const postData = JSON.stringify(orderMissing);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/notes/special-request")
            reporter.description("Response message from API:"+JSON.stringify(response))

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

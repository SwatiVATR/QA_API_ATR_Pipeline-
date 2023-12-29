const dotenv = require('dotenv');
dotenv.config();
const {
    STAGE,
    VERSION,
    commonOptionsGET,
    commonOptionsPUTwithoutHeader,
    commonOptionsPOST,
    Timeout,
    commonOptionsPOSTwithoutHeader
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success } = require("../../RequestBodies/NotesUpdateBody");
it('API Success for service notes',
    async () => {
        const postData = JSON.stringify({});
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/159306/0`,
            ...commonOptionsGET,
        };
        try {
            reporter.startStep("getting response from api");
            const response = await NAModule(postData, options);
            expect(response.success.txId).toBe(
                "159306"
            );
            reporter.endStep();
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success for service notes update',
    async () => {
        const options = {
            ...commonOptionsPUTwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/notes/update`,
        };
        const postData = JSON.stringify(success);
        try {
            reporter.startStep("getting response from api");
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(200);
            reporter.endStep();
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success for service submit notes of not ATR Members',
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/submit-notes`,
            ...commonOptionsPOST,
        };
        const postData = JSON.stringify({
            "client_orderId": "BT-7801",
            "note": "testing3 send email from postman12 send Email is true",
            "userID": "352"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.message).toBe(
                "Notes have been submitted successfully and an email has been sent to both the existing user and the non-ATR members."
            );
            reporter.endStep();
            reporter.description("Response message from API:"+response.message)

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
it('API Success for service submit notes of ATR Members',
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/submit-notes`,
            ...commonOptionsPOST,
        };
        const postData = JSON.stringify({
            "client_orderId": "BT-7801",
            "note": "testing3 send email from postman12 send Email is true",
            "userID": "363"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.message).toBe(
                "Notes have been submitted successfully and an email has been sent to ATR Support."
            );
            reporter.endStep();
            reporter.description("Response message from API:"+response.message)

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success for special-request without appended_note key',
    async () => {
        const postData = JSON.stringify({
            "button_id": "Rush",
            "order_id": "OrderNY-ABC_02",
            "order": { "note": { "transactionId": 118359, "userEmail": process.env.SWATI_USER_EMAIL, "read": false } }
        });
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/special-request`,
            ...commonOptionsPOST,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Rush note has been added successfully");
            reporter.endStep();
            reporter.description("Response message from API:" + response.success.message)

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success for special-request with appended_note key',
    async () => {
        const postData = JSON.stringify({
            "button_id": "Rush",
            "order_id": "OrderNY-ABC_02",
            "appended_note": "Testing Process",
            "order": { "note": { "transactionId": 118359, "userEmail": process.env.SWATI_USER_EMAIL, "read": false } }
        });
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/special-request`,
            ...commonOptionsPOST,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success.message).toBe("Appended note has been added successfully for Rush");
            reporter.endStep();
            reporter.description("Response message from API:" + response.success.message)

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)

it('API Success for service current duedate update',
    async () => {
        const postData = JSON.stringify({
            "transaction_id": "5093",
            "dueDate": 1
        });
        const options = {
            path: `/${STAGE}/${VERSION}/services/current_duedate_update`,
            ...commonOptionsPOSTwithoutHeader,
        };
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            const response = await NAModule(postData, options);
            expect(response.success).toBe("An email with the updated details has been shared with the user.");
            reporter.endStep();
            reporter.description("Response message from API:" + response.success)

        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
)
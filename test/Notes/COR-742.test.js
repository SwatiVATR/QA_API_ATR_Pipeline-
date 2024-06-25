const { STAGE, VERSION, commonOptionsPOST, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");

const options = {
    path: `/${STAGE}/${VERSION}/services/submit-notes`,
    ...commonOptionsPOST,
};
let response;
it('Searcher Portal Adding notes for BO/AES',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "readMessage": false,
            "noteDateTime": "01-18-2024 05:35:34",
            "note": "testing SEARCHER_PORTAL note 11",
            "noteCategory": "SEARCHER_PORTAL",
            "noteType": "PRIVATE",
            "searcherID": "1",
            "userID": "352",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.message).toBe("Notes have been submitted successfully and an email has been sent to both the existing user and the non-ATR members.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")
            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('Searcher Portal Adding notes to Client Portal',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "readMessage": true,
            "noteDateTime": "01-18-2024 05:35:34",
            "note": "testing SEARCHER_PORTAL note 11",
            "noteCategory": "SEARCHER_PORTAL",
            "noteType": "PUBLIC",
            "searcherID": "1",
            "userID": "363",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.message).toBe(
                "Notes have been submitted successfully and an email has been sent to ATR Support."
            );
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")

            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('Client Portal adding Notes to AES/Searcher Portal',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "readMessage": true,
            "noteDateTime": "01-18-2024 05:35:34",
            "note": "testing SEARCHER_PORTAL note 11",
            "noteCategory": "SEARCHER_PORTAL",
            "noteType": "PUBLIC",
            "searcherID": "1",
            "userID": "363",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")

            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('Getting notes to Client Portal',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "noteId": 4306,
            "readMessage": true,
            "clientOrderID": "12300225",
            "sendEmail": null,
            "noteDateTime": "06-14-2024 11:40:55",
            "note": "testing client portalm note 11",
            "noteCategory": "SEARCHER_PORTAL",    //category can be AES or Searcher Portal. If it is SEARCHER_PORTAL then the notes originated from searcher portal,then username and useremail belongs to searcher. If it is then the notes originated from AES.
            "noteType": "PUBLIC",
            "userEmail": "cmontero@actiontitleresearch.com", //
            "userName": "Chris Montero",
            "aesNoteDateTime": null,
            "searcherID": 1,
            "backOfficeTransactionStatus": null,
            "userID": "363",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.message).toBe("Notes have been submitted successfully and an email has been sent to ATR Support.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")
            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('AES sending notes to BO/SearcherPortal',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "readMessage": true,
            "noteDateTime": "01-18-2024 05:35:34",
            "note": "testing client portalm note 11",
            "noteCategory": "AES",
            "noteType": "PRIVATE",
            "userID": "363",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.message).toBe("Notes have been submitted successfully and an email has been sent to ATR Support.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")
            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

it('AES sending notes to Client Portal',
    async () => {
        const postData = JSON.stringify({
            "transactionId": 5000,
            "readMessage": true,
            "noteDateTime": "01-18-2024 05:35:34",
            "note": "testing client portalm note 11",
            "noteCategory": "AES",
            "noteType": "PRIVATE",
            "userID": "363",
            "client_orderId": "BT-7801"
        });
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.message).toBe("Notes have been submitted successfully and an email has been sent to ATR Support.");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")
            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)
it('BAD REQUEST',
    async () => {
        const postData = JSON.stringify({});

        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("Invalid user id ");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/submit-notes")

            reporter.description("Response message from API:" + JSON.stringify(response))

        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
)

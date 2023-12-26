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

test(
    "API Success",
    async () => {
        const postData = JSON.stringify({});
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/159306/0`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.txId).toBe(
                "159306"
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);


test(
    "API Success",
    async () => {
        const options = {
            ...commonOptionsPUTwithoutHeader,
            path: `/${STAGE}/${VERSION}/services/notes/update`,
        };
        const postData = JSON.stringify(success);
        try {
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(200);
        } catch (error) {
            throw new Error();
        }
    },
    Timeout
);


test(
    "API Success",
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
        const response = await NAModule(postData, options);
        expect(response.message).toBe(
          "Note inserted successfully in the notes table"
        );
      } catch (error) {
        throw new Error(error);
      }
    },
    Timeout
  );


  test(
    "API Success",
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
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(200);
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "API Success",
    async () => {
        const postData = JSON.stringify({
            "button_id" : "Rush",
            "order_id" : "OrderNY-ABC_02",
            "appended_note": "Testing Process",
            "order":{"note":{"transactionId":118359,"userEmail": process.env.SWATI_USER_EMAIL,"read":false}}
        });
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/special-request`,
            ...commonOptionsPOST,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(200);
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "API Success",
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
            const response = await NAModule(postData, options);
            expect(response.success).toBe(
                "Due date and note updated successfully."
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
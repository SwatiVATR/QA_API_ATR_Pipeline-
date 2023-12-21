const {
    STAGE,
    VERSION,
    commonOptionsPOST,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");
const { success,buttonIdMissing,buttonIdWrong,WithoutButtonID,order_idMissing,order_idWrong,Withoutorder_id,orderMissing} = require("../../RequestBodies/SpecialRequestBody")
const options = {
    path: `/${STAGE}/${VERSION}/services/notes/special-request`,
    ...commonOptionsPOST,
};

test(
    "API Success",
    async () => {
        const postData = JSON.stringify(success);
        try {
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(
                200
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "button_id is missing",
    async () => {
        const postData = JSON.stringify(buttonIdMissing);
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID parameter is missing."
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "button_id is passed wrong or special characters passed to button_id",
    async () => {
        const postData = JSON.stringify(buttonIdWrong);
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID not found."
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);


test(
    "button_id is passed wrong or special characters passed to button_id",
    async () => {
        const postData = JSON.stringify(buttonIdWrong);
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID not found."
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "button_id is not passed in body",
    async () => {
        const postData = JSON.stringify(WithoutButtonID);
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Button ID parameter is missing."
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "order_id is missing",
    async () => {
        const postData = JSON.stringify(order_idMissing);
        try {
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(
                200
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "order_id is passed wrong",
    async () => {
        const postData = JSON.stringify(order_idWrong);
        try {
            const response = await NAModule(postData, options);
            expect(response.success.statusCode).toBe(
               200
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);

test(
    "order_id is not passed in body",
    async () => {
        const postData = JSON.stringify(Withoutorder_id);
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
    "order is passed empty",
    async () => {
        const postData = JSON.stringify(orderMissing);
        try {
            const response = await NAModule(postData, options);
            expect(response.error).toBe(
                "Invalid data or url or filepath argument: \nExpecting value: line 1 column 1 (char 0)"
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
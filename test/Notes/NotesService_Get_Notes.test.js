const {
    STAGE,
    VERSION,
    commonOptionsGET,
    Timeout,
} = require("../../config");
const NAModule = require("../../modules/NAModule");


const postData = JSON.stringify({});

test(
    "API Success",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/159306/0`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect( response.success.txId).toBe(
                "159306"
            );
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);


test(
    "Special characters passed to txId",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes/@@@@@/0`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success.txId).toBe("@@@@@");
        } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
test(
    "txId is not passed",
    async () => {
        const options = {
            path: `/${STAGE}/${VERSION}/services/notes//0`,
            ...commonOptionsGET,
        };
        try {
            const response = await NAModule(postData, options);
            expect(response.success).toBeTruthy();
                } catch (error) {
            throw new Error(error);
        }
    },
    Timeout
);
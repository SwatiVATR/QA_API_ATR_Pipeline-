const { BASE, STAGE, VERSION, commonOptionsPOSTBasicAUTH, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const { TrackSuccess, WithoutProperties, WithoutProductsOrdered } = require("../../RequestBodies/MultiTrackOrdersBody")
const options = {
    path: `/${STAGE}/${VERSION}/webhook/order/ramquest`,
    ...commonOptionsPOSTBasicAUTH,
};
const optionsWithoutToken = {
    path: `/${STAGE}/${VERSION}/webhook/order/ramquest`,
    hostname: BASE,
    method: "POST",
    headers: { "Content-Type": "application/json" },
};

let response;

it('Api success', async () => {
    const postData = JSON.stringify(TrackSuccess);
    try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response = await NAModule(postData, options);
        expect(response.productsOrdered.length).toBeGreaterThan(0);
        reporter.endStep();
        reporter.testId("API Endpoint-/webhook/order/ramquest")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(JSON.stringify(response));
    }
}, Timeout)

it('Without Properties', async () => {
    const postData = JSON.stringify(WithoutProperties);
    try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response = await NAModule(postData, options);
        expect(response.productsOrdered.length).toBeGreaterThan(0);
        reporter.endStep();
        reporter.testId("API Endpoint-/webhook/order/ramquest")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(JSON.stringify(response));
    }
}, Timeout)
it('Without Products Ordered', async () => {
    const postData = JSON.stringify(WithoutProductsOrdered);
    try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response = await NAModule(postData, options);
        expect(response.status).toBe("SystemRejected");
        reporter.endStep();
        reporter.testId("API Endpoint-/webhook/order/ramquest")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(JSON.stringify(response));
    }
}, Timeout)
it('Plain text received as response', async () => {
    const postData = JSON.stringify({});
    try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response = await NAModule(postData, options);
        expect(response.error.status).toBe("SystemRejected");
        reporter.endStep();
        reporter.testId("API Endpoint-/webhook/order/ramquest")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(JSON.stringify(response));
    }
}, Timeout)
it('Invalid Token', async () => {
    const postData = JSON.stringify(TrackSuccess);
    try {
        reporter.startStep("Values passed:" + JSON.stringify(postData));
        response = await NAModule(postData, optionsWithoutToken);
        expect(response.error).toBe("Authorization Required");
        reporter.endStep();
        reporter.testId("API Endpoint-/webhook/order/ramquest")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(JSON.stringify(response));
    }
}, Timeout)

const { BASE,STAGE, VERSION, Timeout } = require("../../config");
const NAModule = require("../../modules/NAModule");
const {
    success,
    searchcountyMissing,
    searchmunicipalityidMissing,
    searchmailingcityMissing,
    searchtypedescMissing
} = require("../../RequestBodies/COR-446-Body")
const commonOptionsPOST = {
    hostname: BASE,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "MktYWNjdXRpdGxlLWVuY29kZWQ=",
    },
}
const commonOptionsPOSTWithoutHeader = {
    hostname: BASE,
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "",
    },
}
it('API Success', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify(success);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.success.msg).toBe("OK");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)

it('searchcounty key is missing', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify(searchcountyMissing);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'county'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)


it('searchmunicipalityid key is missing', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify(searchmunicipalityidMissing);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'searchmunicipalityid'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)

it('searchmailingcityMissing key is missing', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify(searchmailingcityMissing);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'city'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)
it('searchtypedescMissing key is missing', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify(searchtypedescMissing);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("'searchtypedesc'");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)
it('Bad Request', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOST,
    };
    const postData = JSON.stringify({});
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("local variable 'cityName' referenced before assignment");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)
it('Invalid session', async () => {
    const options = {
        path: `/${STAGE}/${VERSION}/webhook/order/accutitle-test`,
        ...commonOptionsPOSTWithoutHeader,
    };
    const postData = JSON.stringify(success);
    try {
        reporter.startStep("getting response from api" + JSON.stringify(postData));
        const response = await NAModule(postData, options);
        expect(response.error).toBe("Invalid API Key");
        reporter.endStep();
        reporter.testId("API Endpoint-/services/normalize/accutitle")
        reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
        throw new Error(error);
    }
}, Timeout)

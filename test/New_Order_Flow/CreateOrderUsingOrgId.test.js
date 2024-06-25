const {
    BASE,
    STAGE,
    VERSION,
    Timeout,
    commonOptionsPOSTBasicAUTH
} = require("../../config");
const options = {
    path: `/${STAGE}/${VERSION}/services/createOrderSearcherPortal`,
    ...commonOptionsPOSTBasicAUTH,
};
const optionsWithoutToken = {
    path: `/${STAGE}/${VERSION}/services/createOrderSearcherPortal`,
    hostname: BASE,
    method: "POST",
    headers: { "Content-Type": "application/json" },
};
const NAModule = require("../../modules/NAModule");
const { success, missingOrderId, missingagencyPortalId,missingownerBuyerRows } = require("../../RequestBodies/createOrderSearcherPortalBody.js")

let response;
it(
    "API Success",
    async () => {
        const postData = JSON.stringify(success);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.success.msg).toBe("OK");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Missing order id",
    async () => {
        const postData = JSON.stringify(missingOrderId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("(MySQLdb._exceptions.OperationalError) (1048, \"Column 'organizationId' cannot be null\")\n[SQL: INSERT INTO tgorder (`tgOrderId`, `fromTrackerPro`, `buyerSearches`, `contractPrice`, `customerCorrelationId`, `customerId`, `customerName`, `customerOrderId`, documents, `lenderName`, `optionalSearches`, `orderDateTime`, `orderType`, `ownerSearches`, `propertyAddress`, `propertyAddressExt`, `propertyCounty`, `propertyDeedBook`, `propertyDeedInst`, `propertyDeedPage`, `propertyMunicipality`, `propertyUnit`, `propertyZipCode`, `rushProcessing`, `searchLength`, status, `transactionProcessingNote`, `transactionType`, `stateId`, `customerShortName`, `loanAmount`, `incomingCode`, `organizationId`, `transProcessingInstruction`, `orderOpen`, `createOrderUser`, `titleId`, `orderId`, `searchId`, `agencyPortalId`, `searchDetailId`, source, `multiTract`, `searchDetailCode`, `baseOrderNo1`, `snapcloseGuid`, `dueDate`, `currentDueDate`, `originalDueDate`, `clientNotes`, `propertyBlock`, `propertyLot`, qualifier, `trackId`, `parcelId`, `additionalParcelId`, `parcelCount`, `addressTwo`, `reportingOrgId`, `coversOrRundown`, `parentOrderId`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)]\n[parameters: (34456166, 0, None, None, 'c993df70-fb99-4f7b-b487-681969c2ea0d', '', None, 'RET22-8909', None, None, None, datetime.datetime(2024, 6, 24, 13, 7, 35, 363193), 'SmartSearch', None, '359 Mcclellan Ave', None, 'Mercer', None, None, None, 'Township of Hamilton', None, '15028', '0', '60', 'Order', None, None, 31, '', None, 2, None, None, 0, None, None, 0, 0, None, 0, 'Integration', 0, None, None, None, None, datetime.date(2024, 6, 28), datetime.date(2024, 6, 28), '', '2334', '17', '', '', '2334', '', '', '', 10, '', None)]\n(Background on this error at: https://sqlalche.me/e/14/e3q8)");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Missing agencyPortalId",
    async () => {
        const postData = JSON.stringify(missingagencyPortalId);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.status).toBe("SystemRejected");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Missing missingownerBuyerRows",
    async () => {
        const postData = JSON.stringify(missingownerBuyerRows);
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("'ownerBuyerRows'");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Plain text received as response",
    async () => {
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, options);
            expect(response.error).toBe("'order'");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
it(
    "Invalid token",
    async () => {
        const postData = JSON.stringify({});
        try {
            reporter.startStep("Values passed:" + JSON.stringify(postData));
            response = await NAModule(postData, optionsWithoutToken);
            expect(response.error).toBe("'order'");
            reporter.endStep();
            reporter.testId("API Endpoint-/services/order-authenticate")
            reporter.description("Response message from API:" + JSON.stringify(response))
        } catch (error) {
            throw new Error(JSON.stringify(response));
        }
    },
    Timeout
);
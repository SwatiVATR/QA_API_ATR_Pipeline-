const NormalizeQualiaBody = {
  order: {
    source: "SnapClose",
    notes: "helloworld3",
    additionalParcelId: 1,
    parcelId: 2,
    purchasePrice: "$23,000",
    transSummary: "Refi",
    searchLength: "40",
    serviceCode: "DI16",
    webTitleNumber: "12345",
    agencyOrderId: "54321",
    agencyPortalId: "abc123",
    orderId: "123123",
    correlationId: "1568hdbxfzgsew4",
    searchType: "SmartSearch",
    orgId: 184245,
    properties: [
      {
        municipalityName: "Ridgewood",
        ownerFullName: "Curtis Spendlove",
        propertyTypeId: "1",
        agencyName: "Bubble Title",
        block: "1",
        lot: "1",
        qualifier: "1",
        address: "1234 123A Ave.",
        addressTwo: "888 Park",
        city: "Richmond",
        county: "Vancouver",
        state: "Washington",
        zip: "99999",
      },
    ],
    parties: [
      {
        role: "owner",
        id: 623853,
        firstName: "Bugs",
        lastName: "B",
        middleName: "Bunny",
        orderId: 623852,
        type: 1,
      },
      {
        role: "owner",
        id: 623857,
        firstName: "Daffy",
        lastName: "D",
        middleName: "Duck",
        orderId: 623852,
        type: 1,
      },
    ],
  },
};

const NormalizeQualiaWithoutOrderBody = { order: "" };
const BadBody = { };

module.exports = {
  NormalizeQualiaBody,
  NormalizeQualiaWithoutOrderBody,
  BadBody,
};

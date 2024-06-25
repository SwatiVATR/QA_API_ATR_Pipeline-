const success = {
  "order": {
    "orgId": "868733",
    "agencyPortalId": "e5675bc6-5e17-4938-bbed-ecfcbf3f3eab",
    "customerOrderId": "RET22-8909",
    "correlationId": "c993df70-fb99-4f7b-b487-681969c2ea0d",
    "duedate": "2023-04-28T11:19:52-04:00",
    "state": "NJ",
    "zipCode": "15028",
    "county": "Mercer",
    "municipality": "Township of Hamilton",
    "address": "359 Mcclellan Ave",
    "block": "2334",
    "lot": "17",
    "parcelId": "2334",
    "orderType": "SmartSearch",
    "searchLength": "60",
    "source": "Integration",
    "transaction_TypeId": 7,
    "property_typeId": 1,
    "policy_typeId": 1,
    "loanAmount": "$1000",
    "purchasePrice": "$25457",
    "clientNotes": "Client Notes",
    "comments": "comments",
    "countyCode": "0401",
    "districtCode": "0414",
    "ownerBuyerRows": [
      {
        "table": "owner",
        "ownerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      },
      {
        "table": "buyer",
        "buyerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      }
    ]
  }
}

const missingOrderId = {
  "order": {
    "orgId": "",
    "agencyPortalId": "e5675bc6-5e17-4938-bbed-ecfcbf3f3eab",
    "customerOrderId": "RET22-8909",
    "correlationId": "c993df70-fb99-4f7b-b487-681969c2ea0d",
    "duedate": "2023-04-28T11:19:52-04:00",
    "state": "NJ",
    "zipCode": "15028",
    "county": "Mercer",
    "municipality": "Township of Hamilton",
    "address": "359 Mcclellan Ave",
    "block": "2334",
    "lot": "17",
    "parcelId": "2334",
    "orderType": "SmartSearch",
    "searchLength": "60",
    "source": "Integration",
    "transaction_TypeId": 7,
    "property_typeId": 1,
    "policy_typeId": 1,
    "loanAmount": "$1000",
    "purchasePrice": "$25457",
    "clientNotes": "Client Notes",
    "comments": "comments",
    "countyCode": "0401",
    "districtCode": "0414",
    "ownerBuyerRows": [
      {
        "table": "owner",
        "ownerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      },
      {
        "table": "buyer",
        "buyerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      }
    ]
  }
}

const missingagencyPortalId = {
  "order": {
    "orgId": "868733",
    "agencyPortalId": "",
    "customerOrderId": "RET22-8909",
    "correlationId": "c993df70-fb99-4f7b-b487-681969c2ea0d",
    "duedate": "2023-04-28T11:19:52-04:00",
    "state": "NJ",
    "zipCode": "15028",
    "county": "Mercer",
    "municipality": "Township of Hamilton",
    "address": "359 Mcclellan Ave",
    "block": "2334",
    "lot": "17",
    "parcelId": "2334",
    "orderType": "SmartSearch",
    "searchLength": "60",
    "source": "Integration",
    "transaction_TypeId": 7,
    "property_typeId": 1,
    "policy_typeId": 1,
    "loanAmount": "$1000",
    "purchasePrice": "$25457",
    "clientNotes": "Client Notes",
    "comments": "comments",
    "countyCode": "0401",
    "districtCode": "0414",
    "ownerBuyerRows": [
      {
        "table": "owner",
        "ownerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      },
      {
        "table": "buyer",
        "buyerTypeId": 1,
        "firstName": "person",
        "middleName": "",
        "lastName": "One",
        "suffix": ""
      }
    ]
  }
}

const missingownerBuyerRows = {
  "order": {
    "orgId": "868733",
    "agencyPortalId": "e5675bc6-5e17-4938-bbed-ecfcbf3f3eab",
    "customerOrderId": "RET22-8909",
    "correlationId": "c993df70-fb99-4f7b-b487-681969c2ea0d",
    "duedate": "2023-04-28T11:19:52-04:00",
    "state": "NJ",
    "zipCode": "15028",
    "county": "Mercer",
    "municipality": "Township of Hamilton",
    "address": "359 Mcclellan Ave",
    "block": "2334",
    "lot": "17",
    "parcelId": "2334",
    "orderType": "SmartSearch",
    "searchLength": "60",
    "source": "Integration",
    "transaction_TypeId": 7,
    "property_typeId": 1,
    "policy_typeId": 1,
    "loanAmount": "$1000",
    "purchasePrice": "$25457",
    "clientNotes": "Client Notes",
    "comments": "comments",
    "countyCode": "0401",
    "districtCode": "0414"
  }
}
module.exports = {
  success,
  missingOrderId,
  missingagencyPortalId,
  missingownerBuyerRows
};

const success = {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}

const successAppend = {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
const buttonIdMissing = {
    "button_id": "",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}


const invalidButtonId = {
    "button_id": "ewarewfewfef",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}


const orderIdMissing = {
    "button_id": "Rush",
    "order_id": "",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}

const invalidOrderId = {
    "button_id": "Rush",
    "order_id": "wsaffffffffs",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
const search_company_id_String = {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": "1",
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
const appendNoteMissing = {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
const transactionId_String= {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": "118359",
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
const userEmailMissing= {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": "118359",
            "userEmail": "",
            "read": false
        }
    }
}
const invalidUserEmail= {
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": 1,
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": "118359",
            "userEmail": "sddddddddddddd",
            "read": false
        }
    }
}

const InvalidSearch_company_id={
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "search_company_id": "ewfrefr1@@@",
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}

const Search_company_id_Missing={
    "button_id": "Rush",
    "order_id": "OrderNY-ABC_02",
    "appended_note": "Testing Process",
    "order": {
        "note": {
            "transactionId": 118359,
            "userEmail": "sverma@actiontitleresearch.com",
            "read": false
        }
    }
}
module.exports = {
    success,
    successAppend,
    buttonIdMissing,
    invalidButtonId,
    orderIdMissing,
    invalidOrderId,
    search_company_id_String,
    appendNoteMissing,
    transactionId_String,
    userEmailMissing,
    invalidUserEmail,
    InvalidSearch_company_id,
    Search_company_id_Missing
};

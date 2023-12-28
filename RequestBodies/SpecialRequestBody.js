const success = {
    "button_id" : "Rush",
    "order_id" : "OrderNY-ABC_02",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}   
const successAppended = {
    "button_id" : "Rush",
    "order_id" : "OrderNY-ABC_02",
    "appended_note": "Testing Process",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
} 
const buttonIdMissing = {
    "button_id" : "",
    "order_id" : "OrderNY-ABC_02",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}  
const buttonIdWrong = {
    "button_id" : "abc",
    "order_id" : "OrderNY-ABC_02",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}  

const WithoutButtonID = {
    "order_id" : "OrderNY-ABC_02",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}  

const order_idMissing = {
    "button_id" : "Rush",
    "order_id" : "",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}

const order_idWrong = {
    "button_id" : "Rush",
    "order_id" : "sfdfdsfedsfdsf",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}
const Withoutorder_id = {
    "button_id" : "Rush",
    "order":{"note":{"transactionId":118359,"userEmail":"sverma@actiontitleresearch.com","read":false}}
}
const orderMissing = {
    "button_id" : "Rush",
    "order_id" : "sfdfdsfedsfdsf",
    "order":""
}
module.exports = {
    success,
    buttonIdMissing,
    buttonIdWrong,
    WithoutButtonID,
    order_idMissing,
    order_idWrong,
    Withoutorder_id,
    orderMissing,
    successAppended
};

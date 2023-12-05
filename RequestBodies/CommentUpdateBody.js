const CommentUpdateBody = {
  order: {
    order: {
      transaction: {
        id: 118359,
        status: "Active",
        currentProcessingQueue: "Admin",
        searcherID: "1",
        read: 1,
        clientNotes: "hello from atr services",
      },
    },
  },
};

const Emptyorder = { order: "" };
const Emptytransaction = { order: { order: { transaction: "" } } };
const BADBody = {};
const Wrongorder = {
  order: "3434e3",
};


const Wrongid = {
  "order": {
    "order": {
      "transaction": {
        "id": 343434,
        "status": "Active",
        "currentProcessingQueue": "Admin",
        "searcherID": "1",
        "read": 1,
        "clientNotes": "hello from atr services"
      }
    }
  }
}

const statusInactive = {
  "order": {
    "order": {
      "transaction": {
        "id": 343434,
        "status": "Inactive",
        "currentProcessingQueue": "Admin",
        "searcherID": "1",
        "read": 1,
        "clientNotes": "hello from atr services"
      }
    }
  }
}


const statusHold = {
  "order": {
    "order": {
      "transaction": {
        "id": 343434,
        "status": "hold",
        "currentProcessingQueue": "Admin",
        "searcherID": "1",
        "read": 1,
        "clientNotes": "hello from atr services"
      }
    }
  }
}
module.exports = {
  CommentUpdateBody,
  Emptyorder,
  BADBody,
  Emptytransaction,
  Wrongorder,
  Wrongid,
  statusInactive,
  statusHold
};

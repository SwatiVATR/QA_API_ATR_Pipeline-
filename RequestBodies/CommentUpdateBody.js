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

module.exports = {
  CommentUpdateBody,
  Emptyorder,
  BADBody,
  Emptytransaction,
};

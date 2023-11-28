const success = {
  appId: "AppUser101",
  appPass: "Pass$123",
  appType: "FileUpload",
  appUsername: "SchPortal",
  recId: 1012906,
  authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
  rating: "5",
  condodev: "1",
  filename: "test1982845.pdf",
  copyfee: "5",
  surrogatesfee: "25.00",
  otherfee: "1",
  notes: "hi",
};
const appIdMissing = {
  appId: "",
  appPass: "Pass$123",
  appType: "FileUpload",
  appUsername: "SchPortal",
  recId: 1012906,
  authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
  rating: "5",
  condodev: "1",
  filename: "test1982845.pdf",
  copyfee: "5",
  surrogatesfee: "25.00",
  otherfee: "1",
  notes: "hi",
};
const appPassMissing = {
  appId: "AppUser101",
  appPass: "",
  appType: "FileUpload",
  appUsername: "SchPortal",
  recId: 1012906,
  authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
  rating: "5",
  condodev: "1",
  filename: "test1982845.pdf",
  copyfee: "5",
  surrogatesfee: "25.00",
  otherfee: "1",
  notes: "hi",
};

const appType = {
  appId: "AppUser101",
  appPass: "$123",
  appType: "",
  appUsername: "SchPortal",
  recId: 1012906,
  authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
  rating: "5",
  condodev: "1",
  filename: "test1982845.pdf",
  copyfee: "5",
  surrogatesfee: "25.00",
  otherfee: "1",
  notes: "hi",
};

const appUsername = {
  appId: "AppUser101",
  appPass: "$123",
  appType: "FileUpload",
  appUsername: "",
  recId: 1012906,
  authKey: "c3932d68c908a63f428a31458461e5a3181f9d79",
  rating: "5",
  condodev: "1",
  filename: "test1982845.pdf",
  copyfee: "5",
  surrogatesfee: "25.00",
  otherfee: "1",
  notes: "hi",
};

const recidMissig={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}

const authKeyMissig={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}
const ratingMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}

const condodevMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}

const filenameMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}

const copyfeeMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"","surrogatesfee":"25.00","otherfee":"1","notes":"hi"}

const surrogatesfee={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"","otherfee":"1","notes":"hi"}

const otherfeeMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"","notes":"hi"}

const notesMissing={"appId":"AppUser101","appPass":"$123","appType":"FileUpload","appUsername":"SchPortal","recId":"1012906","authKey":"c3932d68c908a63f428a31458461e5a3181f9d79","rating":"5","condodev":"1","filename":"test1982845.pdf","copyfee":"5","surrogatesfee":"25.00","otherfee":"1","notes":""}
module.exports = {
  success,
  appIdMissing,
  appPassMissing,
  appType,
  appUsername,
  recidMissig,
  authKeyMissig,
  ratingMissing,
  condodevMissing,
  filenameMissing,
  copyfeeMissing,
  surrogatesfee,
  otherfeeMissing,
  notesMissing
};

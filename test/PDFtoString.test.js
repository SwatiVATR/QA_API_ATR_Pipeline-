const {
  STAGE,
  VERSION,
  commonOptionsPOSTwithoutHeader,
  Timeout,
} = require("../config");
const NAModule = require("../modules/NAModule");

const options = {
  path: `/${STAGE}/${VERSION}/services/invoker/docgen/pdf2string`,
  ...commonOptionsPOSTwithoutHeader,
};

test(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      documents: [
        "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
      ],
      authKey: "d68c908ad8a31c3963f42181f932458461e5a379",
    });
    try {
      const response = await NAModule(postData, options);
      expect(response.statusCode).toBe(500);
    } catch (error) {
      throw new Error(error);
    }
  },
  Timeout
);

test(
  "Auth key is missing|| Wrong API key",
  async () => {
    const postData = JSON.stringify({
      documents: [
        "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
      ],
      authKey: "",
    });
    try {
        const response = await NAModule(postData, options);
        console.log(response);
      } catch (error) {
        expect(error).toBe("Error parsing response data");
      }
  },
  Timeout
);

test(
  "BAD REQUEST",
  async () => {
    const postData = JSON.stringify({
      documents: [
        "/data/Transaction_Documents/120000/121927/GTS-50422~Invoice.pdf",
      ],
      authKey: "",
    });
    try {
      const response = await NAModule(postData, options);
      console.log(response);
    } catch (error) {
      expect(error).toBe("Error parsing response data");
    }
  },
  Timeout
);

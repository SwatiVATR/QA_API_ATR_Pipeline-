const { STAGE,VERSION,Timeout,TOKEN } = require("../../config");
const HttpModule = require("../../modules/HttpModule");

const options = {
  hostname: "35.91.100.230",
  port: 8000,
  path: `/${STAGE}/${VERSION}/callback/order/ramquest`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': TOKEN
  },
};

let response;
it(
  "API Success",
  async () => {
    const postData = JSON.stringify({
      order:
        "\n<Order>\n    <ID>66e23f5b-2118-ed11-a861-005056010771</ID>\n    <Title>ANG-4520</Title>\n    <OrderNo>ANG-4520</OrderNo>\n    <SearchType>3</SearchType>\n    <SearchTypeDesc>County Search</SearchTypeDesc>\n    <SearchID>AT32700720220809162512138</SearchID>\n    <Ordered>2022-08-09T16:25:12-04:00</Ordered>\n    <DueDate>2022-08-11T16:24:55-04:00</DueDate>\n    <Completed>2022-08-10T07:55:06-04:00</Completed>\n    <Vendor>Action</Vendor>\n    <VendorClientRef />\n    <ReturnCode>EMAIL SENT</ReturnCode>\n    <ReturnCode2 />\n    <ReturnFileName>AT32700720220809162512138c.PDF</ReturnFileName>\n    <ClientID>angelta</ClientID>\n    <ClientName>Angel Title &amp; Abstract, Inc.</ClientName>\n    <CompanyCode>ATA</CompanyCode>\n    <Status>Completed</Status>\n    <Remarks>Super Rush</Remarks>\n    <SEARCHSTATE>NJ</SEARCHSTATE>\n    <SEARCHCOUNTY>MONMOUTH</SEARCHCOUNTY>\n    <SEARCHMUNICIPALITY>Borough of Belmar</SEARCHMUNICIPALITY>\n    <SEARCHMUNICIPALITYID>1307</SEARCHMUNICIPALITYID>\n    <SEARCHSTREETADDRESS>1008 Fourteenth Ave</SEARCHSTREETADDRESS>\n    <SEARCHTAXBLOCKPARCEL1>139</SEARCHTAXBLOCKPARCEL1>\n    <SEARCHTAXLOT1>17</SEARCHTAXLOT1>\n    <SEARCHTAXQUAL />\n    <SEARCHTAXSECTION />\n    <SEARCHTAXDISTRICT />\n    <SEARCHCONDO />\n    <SEARCHUNIT />\n    <SEARCHOWNER>Steven Knight</SEARCHOWNER>\n    <SEARCHADDLOTS />\n    <SEARCHAPPLICANT />\n    <SEARCHAPPRAISALTYPE>FULL SEARCH (60 Years)</SEARCHAPPRAISALTYPE>\n    <SEARCHATTORNEY />\n    <SEARCHBUYERS>Steven Knight</SEARCHBUYERS>\n    <SEARCHCERTIFYTO />\n    <SEARCHCITY />\n    <SEARCHCLOSING />\n    <SEARCHCOAPPLICANT />\n    <SEARCHCOD>NO</SEARCHCOD>\n    <SEARCHCONTACT />\n    <SEARCHDOCUMENTCOPY>FIRST PAGE, LEGAL, SIGNATURE COPIES</SEARCHDOCUMENTCOPY>\n    <SEARCHFILEDBLOCK>5893</SEARCHFILEDBLOCK>\n    <SEARCHFILEDLOT>627</SEARCHFILEDLOT>\n    <SEARCHFLOODELEVATION />\n    <SEARCHFILEDMAP />\n    <SEARCHFROM />\n    <SEARCHHOMEPHONE />\n    <SEARCHLENDER />\n    <SEARCHLENDERPHONE />\n    <SEARCHLENDERID />\n    <SEARCHLOANNUMBER />\n    <SEARCHLIFEOFLOAN>NO</SEARCHLIFEOFLOAN>\n    <SEARCHLISTINGAGENT />\n    <SEARCHLOAN />\n    <SEARCHGRANTREQUEST>NO</SEARCHGRANTREQUEST>\n    <SEARCHGRPP>NO</SEARCHGRPP>\n    <SEARCHNAMESTABLE />\n    <SEARCHNAMESTABLERAW />\n    <SEARCHNAME />\n    <SEARCHMAIDENNAME />\n    <SEARCHPROCESSOR />\n    <SEARCHPROCESSORPHONE />\n    <SEARCHPROPOSEDLOAN />\n    <SEARCHREALTOR />\n    <SEARCHREF>ANG-4520</SEARCHREF>\n    <SEARCHMISCREMARKS>Steven Knight</SEARCHMISCREMARKS>\n    <SEARCHSALESPRICE />\n    <SEARCHSELLERS />\n    <SEARCHSELLERSNAME />\n    <SEARCHSELLERSPHONE />\n    <SEARCHSTAKES>NO</SEARCHSTAKES>\n    <SEARCHCONDOCERT>NO</SEARCHCONDOCERT>\n    <SEARCHTERMITEFINANCING />\n    <SEARCHTO />\n    <SEARCHUNCONFIRMEDASSESSMENT>NO</SEARCHUNCONFIRMEDASSESSMENT>\n    <SEARCHUTILITIES>NO</SEARCHUTILITIES>\n    <SEARCHWORKPHONE />\n    <SEARCHYEARS />\n    <SEARCHUNDERWRITER>Old Republic National Title Insurance Company</SEARCHUNDERWRITER>\n    <SEARCHPRIORDEEDBOOK>5893</SEARCHPRIORDEEDBOOK>\n    <SEARCHPRIORDEEDPAGE>627</SEARCHPRIORDEEDPAGE>\n    <SEARCHCONTIN>NO</SEARCHCONTIN>\n    <SEARCHRETURNCODE>EMAIL SENT</SEARCHRETURNCODE>\n    <SEARCHPLAINTIFF />\n    <SEARCHDEFENDANT>Steven Knight</SEARCHDEFENDANT>\n    <SEARCHDOCKET />\n    <SEARCHFINALJUDGMENT />\n    <SEARCHCOMPLAINTDATE />\n    <SEARCHFILINGLISPENS />\n    <SEARCHSEARCHPERIOD />\n    <SEARCHCAUSEOFACTION>5893</SEARCHCAUSEOFACTION>\n    <SEARCHNYTAXTYPES />\n    <SEARCHNYTAXNAMES />\n    <SEARCHFLTAXTYPES />\n    <SEARCHFLTAXNAMES />\n    <TaxSubdivision1 />\n    <SEARCHCLEARANCETITLE />\n    <SEARCHCLEARANCEITEMS />\n    <THISADDRESSONLY>False</THISADDRESSONLY>\n    <ApplicationType>Refinance</ApplicationType>\n    <PropertyType>Residential</PropertyType>\n</Order>\n",
    });
    try {
      reporter.startStep("Values passed:" + JSON.stringify(postData));
      response = await HttpModule(postData, options);
      expect(response.statusCode).toBe(201);
      reporter.endStep();
      reporter.testId("API Endpoint-/callback/order/ramquest")
      reporter.description("Response message from API:" + JSON.stringify(response))
    } catch (error) {
      throw new Error(JSON.stringify(response));
    }
  },
  Timeout
);

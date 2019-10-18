var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
const fs = require('fs');

var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;



// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'f199b121-4d0d-495c-a6c2-44b83f12dce2';



var apiInstance = new CloudmersiveConvertApiClient.ConvertWebApi();

var inputRequest = new CloudmersiveConvertApiClient.HtmlToOfficeRequest(); // HtmlToOfficeRequest | 

inputRequest.Html = "<b>Hello, World!</b>";

var fileOutput = null;


var callback = function(error, data, response) {
  if (error) {
    console.error("Error in first call");
    console.error(error);
  } else {
    fileOutput = data;
    console.info("Completed first call.");

    // Perform second call

    var apiInstance = new CloudmersiveConvertApiClient.EditDocumentApi();

    var reqConfig = new CloudmersiveConvertApiClient.DocxSetFooterRequest(); // DocxSetFooterRequest | 

    reqConfig.FooterToApply = new CloudmersiveConvertApiClient.DocxFooter();
    reqConfig.FooterToApply.Paragraphs = [];
    reqConfig.FooterToApply.Paragraphs[0] = new CloudmersiveConvertApiClient.DocxParagraph();

    reqConfig.FooterToApply.Paragraphs[0].ContentRuns = [];
    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0] = new CloudmersiveConvertApiClient.DocxRun();

    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0].FontFamily = "Arial";
    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0].FontSize = 50;
    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0].TextItems = [];
    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0].TextItems[0] = new CloudmersiveConvertApiClient.DocxText();

    reqConfig.FooterToApply.Paragraphs[0].ContentRuns[0].TextItems[0].TextContent = "Page 1";

    reqConfig.InputFileBytes = fileOutput.toJSON().data;


    var callback2 = function(error, data2, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data');

        var reqConfig = new CloudmersiveConvertApiClient.FinishEditingRequest(); // FinishEditingRequest | 
        reqConfig.InputFileUrl = data2.EditedDocumentURL;

        var callback = function(error, data3, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data');

            fs.writeFile("C:\\temp\\cloudmersive_output.docx", data3, "binary", function(err) {

                if(err) {
                    return console.log(err);
                }
            
                console.log("The file was saved!");
            }); 
        }
        };
        apiInstance.editDocumentFinishEditing(reqConfig, callback);

        
    }
    };
    apiInstance.editDocumentDocxSetFooter(reqConfig, callback2);


  }
};
apiInstance.convertWebHtmlToDocx(inputRequest, callback);





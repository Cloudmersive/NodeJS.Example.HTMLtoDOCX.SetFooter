var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
const fs = require('fs');

var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;



// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR-API-KEY-HERE';



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

    var reqConfig = new CloudmersiveConvertApiClient.DocxSetFooterAddPageNumberRequest();

    reqConfig.PrependText = "Page ";

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
    apiInstance.editDocumentDocxSetFooterAddPageNumber(reqConfig, callback2);


  }
};
apiInstance.convertWebHtmlToDocx(inputRequest, callback);





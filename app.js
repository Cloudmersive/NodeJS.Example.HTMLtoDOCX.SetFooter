var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
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
    console.error(error);
  } else {
    fileOutput = data;
  }
};
apiInstance.convertWebHtmlToDocx(inputRequest, callback);




var apiInstance = new CloudmersiveConvertApiClient.EditDocumentApi();

var reqConfig = new CloudmersiveConvertApiClient.DocxSetFooterRequest(); // DocxSetFooterRequest | 


var callback2 = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editDocumentDocxSetFooter(reqConfig, callback2);
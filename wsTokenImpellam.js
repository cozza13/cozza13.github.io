'use strict';  
//for XML parsing
var https = require('https');
var trustClient = require('./wstrust-rsm.js');
const querystring = require('querystring');

const tokenRequestOptions = {
    scope: 'https://impellamtest.impellam.com',
    username: 'xxxxxxxx', // TODO: add username
    password: 'xxxxxxxxxxx', // TODO: add password
    endpoint: 'https://signon.impellam.com/adfs/services/trust/13/UsernameMixed',
    type: 'jwt'
};


trustClient.requestSecurityToken(tokenRequestOptions, function (returnValue) {
    
    getData(returnValue.token);
    
}, function (error) {
	console.log("Error in requestSecurityToken Callback: " + error);
});


function getData(token){  
 
    // CRM specific code
    var requestheaders = { 
        'Authorization': 'Bearer ' + token, // append JWT token to header
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0',
        'Content-Type': 'application/json',
         };
 
    var crmrequestoptions = {
         host: 'impellamtest.impellam.com',
         port:443,
         path: '/api/data/v8.1/systemusers?$top=1&$select=domainname,firstname,lastname',
         method: "GET",
         headers: requestheaders,
     };
 
     var crmrequest = https.request(crmrequestoptions, function( response) {
     var responsebody=''
         response.setEncoding("utf-8");
         var responseparts = [];
         response.on('data', function(chunk) {   
             responsebody +=chunk;
         });
         response.on('end', function(){
             if ((response.statusCode >= 200) && (response.statusCode < 300)) { 
                console.log(responsebody);
                var responseData = JSON.parse(responsebody);
            } else { 
                console.log(responsebody);
            }
         });
     });
     crmrequest.on('error', function(e) {
         console.error("There's an error",e);
     });
     //close the web api request
     crmrequest.end();
 };
 
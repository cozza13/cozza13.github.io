/*!
 * WsTrust Client
 * @author Leandro Boffi (@leandroboffi)
 * 
 * 2017.12.08 - luke.grindahl@RSMUS.COM
 * Description: updated to support
 *               - JWT features in ADFS 3.0
 *               - Multi-part responses
 *               - Support for parsing encrypted RST responses
 */

const templates = {
    rst: '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"><s:Header><a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RST/Issue</a:Action><a:To s:mustUnderstand="1">[To]</a:To><o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><o:UsernameToken u:Id="uuid-6a13a244-dac6-42c1-84c5-cbb345b0c4c4-1"><o:Username>[Username]</o:Username><o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">[Password]</o:Password></o:UsernameToken></o:Security></s:Header><s:Body><trust:RequestSecurityToken xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512"><wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy"><a:EndpointReference><a:Address>[ApplyTo]</a:Address></a:EndpointReference></wsp:AppliesTo><trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType><trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType><trust:TokenType>urn:oasis:names:tc:SAML:1.0:assertion</trust:TokenType></trust:RequestSecurityToken></s:Body></s:Envelope>',
    jwt: '<s:Envelope xmlns:s="http://www.w3.org/2003/05/soap-envelope" xmlns:a="http://www.w3.org/2005/08/addressing" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"><s:Header><a:Action s:mustUnderstand="1">http://docs.oasis-open.org/ws-sx/ws-trust/200512/RST/Issue</a:Action><a:To s:mustUnderstand="1">[To]</a:To><o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"><o:UsernameToken u:Id="uuid-6a13a244-dac6-42c1-84c5-cbb345b0c4c4-1"><o:Username>[Username]</o:Username><o:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">[Password]</o:Password></o:UsernameToken></o:Security></s:Header><s:Body><trust:RequestSecurityToken xmlns:trust="http://docs.oasis-open.org/ws-sx/ws-trust/200512"><wsp:AppliesTo xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy"><a:EndpointReference><a:Address>[ApplyTo]</a:Address></a:EndpointReference></wsp:AppliesTo><trust:KeyType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Bearer</trust:KeyType><trust:RequestType>http://docs.oasis-open.org/ws-sx/ws-trust/200512/Issue</trust:RequestType><trust:TokenType>urn:ietf:params:oauth:token-type:jwt</trust:TokenType></trust:RequestSecurityToken></s:Body></s:Envelope>',
};

var https = require('https');
var url = require('url');

exports.version = '0.0.2';

exports.requestSecurityToken = function (options, callback, errorCallback) {

    var message = '';
    if (options.type = 'jwt')
        message = templates.jwt;
    else
        message = templates.rst;

    var uri = url.parse(options.endpoint);

    message = message.replace("[To]", options.endpoint);
    message = message.replace("[Username]", options.username);
    message = message.replace("[Password]", options.password);
    message = message.replace("[ApplyTo]", options.scope);

    var post_options = {
        host: uri.host,
        port: '443',
        path: uri.pathname,
        method: 'POST',
        headers: {
            'Content-Type': 'application/soap+xml; charset=utf-8',
            'Content-Length': message.length
        }
    };

    var req = https.request(post_options, function (res) {
        let responseparts = [];
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            // capture data chunks if multiple responses
            responseparts.push(chunk);
        });
        res.on('end', function () {
            //once we have all the response parts, concatenate the parts into a single string
            var completeResponse = responseparts.join('');

            console.log('Response retrieved . . . ');
            var tokenData = '';
            if (options.type = 'jwt')
                tokenData = parseJwt(completeResponse);
            else
                tokenData = parseRstrResponse(completeResponse);

            var returnObject = {
                token: tokenData,
                response: res,
                data: completeResponse
            };

            callback(returnObject);
        });
    });

    req.write(message);
    req.end();
    req.on('error', function (e) { errorCallback(e); });
};


// Parses the RequestSecurityTokenResponse's Encrypted Assertion
function parseEncryptedAssertion(rstr) {
    var startOfAssertion = rstr.indexOf('<EncryptedAssertion ');
    var endOfAssertion = rstr.indexOf('</EncryptedAssertion>') + '</EncryptedAssertion>'.length;
    var token = rstr.substring(startOfAssertion, endOfAssertion);
    return token;
};

// Parses the RequestSecurityTokenResponse
function parseRstrResponse(rstr) {
    var startOfAssertion = rstr.indexOf('<trust:RequestSecurityTokenResponse>');
    var endOfAssertion = rstr.indexOf('</trust:RequestSecurityTokenResponse>') + '</trust:RequestSecurityTokenResponse>'.length;
    var token = rstr.substring(startOfAssertion, endOfAssertion);
    return token;
};

function parseJwt(body) {
    var match = body.match(/<wsse:BinarySecurityToken(.+?)>([^<]*)<\/wsse:BinarySecurityToken>/);
    return match;
    var jwtBase64 = match[2];
    return Buffer.from(jwtBase64, 'base64').toString('utf8');
};
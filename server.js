const saveApiDoc = require("./module/saveApiDoc");
const testApiDoc = require('./api_doc/test');
const userApiDoc = require("./api_doc/user");

const apiDocArray = [...testApiDoc, ...userApiDoc];
saveApiDoc(apiDocArray.reverse(), 'fast');
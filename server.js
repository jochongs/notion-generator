const express = require('express');
const app = express();

const saveApiDoc = require("./module/saveApiDoc");
const testApiDoc = require('./api_doc/test');
const userApiDoc = require("./api_doc/user");
const userApi = require('./routes/user');

app.use('/', userApi);

//const apiDocArray = [...testApiDoc, ...userApiDoc];
//saveApiDoc(apiDocArray.reverse(), 'fast');

app.listen(3000, '0.0.0.0', () => {
    console.log('server open');
});
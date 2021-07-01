const routeInvoices = require('express').Router();

const {uploadFile, getInvoices} = require('./invoices/controller');

//scripts
const tokenValidate = require('../../scripts/token');

routeInvoices.post('/invoices', tokenValidate.verifyToken, getInvoices);
routeInvoices.post('/invoices/upload', [tokenValidate.verifyToken, uploadFile]);

module.exports = {
    routeInvoices
}
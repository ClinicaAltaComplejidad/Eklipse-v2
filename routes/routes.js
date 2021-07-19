const routeCensus = require('express').Router();
const routerLogin = require('express').Router();

const { getAllPatientsControl } = require('../api/hospitalization/patientsControl/controller');
const { getAllPatientsCensus } = require('../api/hospitalization/census/controller');

const { routeInvoices } = require('../api/billing/routes');
const { login } = require('../api/login/controller');

//utils
const tokenValidate = require('../scripts/token');

//doctor routes
routeCensus.post('/patients-census', tokenValidate.verifyToken, getAllPatientsCensus);
routeCensus.post('/patients-control', tokenValidate.verifyToken, getAllPatientsControl)

//login route
routerLogin.post('/login', login);

module.exports = {
    routeCensus,
    routerLogin,
    routeInvoices
} 
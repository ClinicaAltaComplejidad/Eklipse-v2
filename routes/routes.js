const routeDoctor = require('express').Router();
const routerLogin = require('express').Router();

const { getAllCensusesBed } = require('../api/hospitalization/patients/controller');
const { routeInvoices } = require('../api/billing/routes');
const { login } = require('../api/login/controller');

//utils
const tokenValidate = require('../scripts/token');

//doctor routes
routeDoctor.post('/censuses', tokenValidate.verifyToken, getAllCensusesBed);

//login route
routerLogin.post('/login', login);

module.exports = {
    routeDoctor,
    routerLogin,
    routeInvoices
} 
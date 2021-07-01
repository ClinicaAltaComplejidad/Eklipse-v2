const routeDoctor = require('express').Router();
const routerLogin = require('express').Router();

const { getAllCensuses, testFactures } = require('../api/doctor/controller');
const { login } = require('../api/login/controller');

//utils
const tokenValidate = require('../scripts/token');

//doctor routes
routeDoctor.post('/censuses', tokenValidate.verifyToken, getAllCensuses);
routeDoctor.post('/factures', tokenValidate.verifyToken, testFactures);

//login route
routerLogin.post('/login', login);

module.exports = {
    routeDoctor,
    routerLogin
} 
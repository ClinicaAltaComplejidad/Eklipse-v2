//sql y coneccion
const { sql, sqlConfig } = require('./dbConfig');

//querys
const { getPatientsControl } = require('./querys/getPatientsControl');
const { getPatientsCensus } = require('./querys/getPatientsCensus');
const { getUserQuery } = require('./querys/getLogin');

module.exports = {
    sql,
    sqlConfig,
    getPatientsControl,
    getPatientsCensus,
    getUserQuery
}
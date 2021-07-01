//sql y coneccion
const { sql, sqlConfig } = require('./dbConfig');

//querys
const { getCensusOfPatients } = require('./querys/getCensus');
const { getUserQuery } = require('./querys/getLogin');

module.exports = {
    sql,
    sqlConfig,
    getCensusOfPatients,
    getUserQuery
}
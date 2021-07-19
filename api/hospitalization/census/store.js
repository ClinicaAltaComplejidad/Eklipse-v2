const { sql, sqlConfig, getPatientsCensus } = require('../../../databases/db');

const getPatientCensus = async (clinic) => {
    
    try {
        await sql.connect(sqlConfig);
    } catch (error) {
        console.error('[ERROR] - BD NOT CONECTION - ', error.message);
        return {}
    }

    const result = await sql.query( getPatientsCensus(clinic) );
    await sql.close();

    return result.recordset;

}


module.exports = {
    getPatientCensus
}
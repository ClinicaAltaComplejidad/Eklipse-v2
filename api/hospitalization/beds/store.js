const { sql, sqlConfig, getCensusOfPatientsInBed } = require('../../../databases/db');

const getCensus = async (bedGroup) => {
    
    try {
        await sql.connect(sqlConfig);
    } catch (error) {
        console.error('[ERROR] - BD NOT CONECTION - ', error.message);
        return {}
    }

    const result = await sql.query( getCensusOfPatientsInBed(bedGroup) );
    await sql.close();

    return result.recordset;

}


module.exports = {
    getCensus
}
const { sql, sqlConfig, getPatientsControl } = require('../../../databases/db');

const getPatientsControls = async (bedGroup) => {
    
    try {
        await sql.connect(sqlConfig);
    } catch (error) {
        console.error('[ERROR] - BD NOT CONECTION - ', error.message);
        return {}
    }

    const result = await sql.query( getPatientsControl(bedGroup) );
    await sql.close();

    return result.recordset;

}


module.exports = {
    getPatientsControls
}
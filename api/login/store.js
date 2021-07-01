const { sql, sqlConfig, getUserQuery } = require('../../databases/db');

const validateUserDB = async (user, password) => {
    try {
        await sql.connect(sqlConfig);
    } catch (error) {
        console.error('[ERROR] - BD NOT CONECTION - ', error.message);
        return {}
    }

    const result = await sql.query( getUserQuery(user, password) );
    const userData = {
        USERNAME: result.recordset[0].USUNOMBRE,
        ROLENAME: result.recordset[0].ROLNOMBRE,
        USERDESCRIPTION: result.recordset[0].USUDESCRI
    }
    
    await sql.close();

    return userData;
}

module.exports = {
    validateUserDB
}
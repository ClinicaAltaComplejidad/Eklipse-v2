const getUserQuery = (user, password) => {
    return ` 
    SELECT GENUSUARIO.USUNOMBRE,
    GENUSUARIO.USUDESCRI,
    GENUSUARIO.USUCLAVE,
    GENROL.ROLNOMBRE
    FROM GENUSUARIO
    INNER JOIN GENROL ON GENROL.OID = GENUSUARIO.GENROL
    WHERE GENUSUARIO.USUESTADO = 1 and GENUSUARIO.USUNOMBRE = '${user}' and GENUSUARIO.USUCLAVE = '${password}'
    
    `
}

module.exports = {
    getUserQuery
}
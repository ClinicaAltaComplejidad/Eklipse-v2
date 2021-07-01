const jwt = require('jsonwebtoken');

const generateToken = async (data = {}) => {

    let tokenGenerated;

    try {
        tokenGenerated = jwt.sign(data, process.env.WORD_SSSHHH, { algorithm: 'HS256' });
    } catch (error) {
        return {}
    }

    return tokenGenerated;

}

const verifyToken = (request, response, next) => {

    const header = request.headers['authorization'];

    if ( typeof header != 'undefined' ) {

        const token = header.split(" ")[1];
        
        try {
            const data = jwt.verify(token, process.env.WORD_SSSHHH);
            next();
        } catch (error) {

            console.error(error.message);
            response.status(403).json({
                Message: 'Permiso no valido'
            });

        }

    } else {
        response.status(403).json({
            Message: 'No tienes permisos'
        });
    }

}

module.exports = {
    generateToken,
    verifyToken
}
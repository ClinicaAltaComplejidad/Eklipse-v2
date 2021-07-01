const { validateUserDB } = require('./store');

//utils
const { generateToken } = require('../../scripts/token');
const { afterDays } = require('../../scripts/afterDays');

const login = async (request, response) => {

    const {user, password} = request.body;
    
    let responseData;
    let token;

    try {
        responseData = await validateUserDB(user, password);
    } catch (error) {
        return response.status(400).json({
            Message: 'FAILED',
            data: {}
        });
    }

    token = await generateToken(responseData);

    response.cookie('token', token, {
        expire: afterDays(2) 
    });

    return response.status(200).json({
        Message: 'OK',
        data: responseData
    });

}

module.exports = {
    login
}
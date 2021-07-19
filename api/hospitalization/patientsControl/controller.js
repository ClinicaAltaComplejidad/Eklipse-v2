const { getPatientsControls } = require('./store');

const getAllPatientsControl = async (request, response) => {

    let censuses;
    
    try {
        censuses = await getPatientsControls(request.body.bed);     
    } catch (error) {
        return response.status(400).json({
            Message: 'BAD REQUEST',
            data: {}
        });
    }

    return response.status(200).json({
        Message: 'OK',
        data: censuses
    });

}


module.exports = {
    getAllPatientsControl,
}
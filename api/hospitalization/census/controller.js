const { getPatientCensus } = require('./store');

const getAllPatientsCensus = async (request, response) => {

    let censuses;
    const { clinic} = request.body
    try {
        censuses = await getPatientCensus(clinic);     
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
    getAllPatientsCensus,
}
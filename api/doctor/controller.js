const { getCensus } = require('./store');

const getAllCensuses = async (request, response) => {

    let censuses; 

    try {
        censuses = await getCensus(request.body.bed);     
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
    getAllCensuses
}
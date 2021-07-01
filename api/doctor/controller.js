const fs = require('fs');
const path = require('path');

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

const uploadFile = (req, res) => {
    
}

const testFactures = (req, res) => {
    
    fs.readFile(path.join(__dirname, '../../files/factura.txt'), 'utf-8', (err, data) => {
        
        if(err)  console.error('error: ', err);



    });

    res.send("Hello word");
}


module.exports = {
    getAllCensuses,
    testFactures
}
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

const uploadFile = (request, response) => {
    const file =  request.files.factura;

    console.log(file);
    
    file.mv(path.join(__dirname, `../../files/factura.txt`), err => {

        if (err) response.status(500).send({ message : err });

        response.status(200).json({
            Message: 'OK'
        });
    
    });
}

const testFactures = (request, response) => {
    
    let dataResponse = [];

    fs.readFile(path.join(__dirname, `../../files/factura.txt`), 'utf-8', (err, data) => {
        
        if(err)  console.error('error: ', err);

        data = data.split('\n').join('').split('\r');

        for (let i = 0; i < data.length - 1; i++) {
            
            const element = data[i].split(';');

            const dataFacture = {
                numberFacture: element[0],
                numberOutput: element[1],
                benefitPlan: element[2],
                value: element[3],
                factureDate: element[4],
                identificationPacient: element[5],
                namePacient: element[6]
            }

            dataResponse.push(dataFacture);

        }


        response.status(200).json({
            Message: 'OK',
            dataResponse
        });

    });

}


module.exports = {
    getAllCensuses,
    testFactures,
    uploadFile
}
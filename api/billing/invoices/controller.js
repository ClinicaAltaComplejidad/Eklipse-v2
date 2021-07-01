const fs = require('fs');
const path = require('path');

const getInvoices = (request, response) => {
    
    let dataResponse = [];

    fs.readFile(path.join(__dirname, `../../../files/factura.txt`), 'utf-8', (err, data) => {
        
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

const uploadFile = (request, response) => {
    const file =  request.files.factura;

    console.log(file);
    
    file.mv(path.join(__dirname, `../../../files/factura.txt`), err => {

        if (err) response.status(500).send({ message : err });

        response.status(200).json({
            Message: 'OK'
        });
    
    });
}

module.exports = {
    uploadFile,
    getInvoices
}
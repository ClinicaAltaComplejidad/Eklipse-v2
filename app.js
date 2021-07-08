const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const uploadFile = require('express-fileupload');
const cors = require('cors');

//utils
require('dotenv').config();

//routers
const { routeDoctor, routerLogin, routeInvoices } = require('./routes/routes');

//app
const app = express();
const port = 4000;

//middlewares
app.use( cors() );
app.use( helmet() );
app.use( cookieParser() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.json() );
app.use( uploadFile() );

//router
app.use('/api.v1/eklipse.v2/', routeDoctor);
app.use('/api.v1/eklipse.v2/', routeInvoices);
app.use('/api.v1/eklipse.v2/', routerLogin);


//server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

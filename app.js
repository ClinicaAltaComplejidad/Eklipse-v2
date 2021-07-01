const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

//utils
require('dotenv').config();

//routers
const { routeDoctor, routerLogin } = require('./routes/routes');

//app
const app = express();
const port = 3000;

//middlewares
app.use( helmet() );
app.use( cookieParser() );
app.use( express.json() );


//router
app.use('/api.v1/eklipse.v2/', routeDoctor);
app.use('/api.v1/eklipse.v2/', routerLogin);


//server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/API', routes);

app.listen(3002, null, () => {
  console.log('El servicio esta en el puerto 3002');
});
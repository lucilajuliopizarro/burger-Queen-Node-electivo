const express = require('express');
const app = express();
// get es lo que utilizamos para hacer nuestras solicitudes,get es para pedir información sin modificarlo
app.get('/', function(req, res) {
    res.send('Hello World!');
});
//aplicación que se queda escuchando a través del puerto y luego da una respuesta
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
/*const calc = require('./calc');
console.log(calc.dividir(3, 45));
console.log(calc.sumar(3, 45));
console.log(calc.resta(3, 45));
console.log(calc.multiplicar(3, 45));*/

const os = require('os');
// MODULO PARA CREAR ARCHIVOS
const fs = require('fs');
// MODULO PARA CREAR UN SERVIDOR
const http = require('http');
// MODULO PARA PONER COLOR AL TEXTO
const colors = require('colors');

/*fs.writeFile('./prueba.html', 'Hola prueba html', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado con exito');
});

fs.readFile('./prueba.html', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});*/

const handleserver = (function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo desde Node<h1>');
    res.end();

});

const server = http.createServer(handleserver);

    server.listen(3000,  function(){
    console.log('Escuchando en el puerto 3000'.random);
});

// MODULO PARA PONER COLOR AL TEXTO



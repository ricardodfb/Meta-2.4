const express = require("express");
const app = express();
const fs = require("fs");
const https = require("https");
process.env.port = 4001;
const llavePrivada = fs.readFileSync("private.key");
const certificado = fs.readFileSync("certificate.crt");
const credenciales = {
key: llavePrivada,
cert: certificado,
passphrase: "password" //passwd de la llave privada usado en la creación del certificado
};
const httpsServer = https.createServer(credenciales, app);
httpsServer.listen(process.env.port, () => {
console.log('Servidor https escuchando por el puerto:', process.env.port);
}).on('error', err => {
console.log('Error al inciar el servidor:', err);
});
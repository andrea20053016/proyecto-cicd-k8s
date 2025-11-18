const express = require('express');
const app = express();
app.get('/', (req,res)=> res.json({msg:"Hola desde API", time: new Date()}));
const port = process.env.PORT || 80;
app.listen(port, ()=> console.log('API escuchando en', port));
module.exports = app; // para tests

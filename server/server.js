require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //midellware

// parse application/json
app.use(bodyParser.json());

// POST CREA REGISTROS
// PUT/patch ACTUALIZA REGISTROS
// GET CONSULTA REGISTROS
// DELETE se usa para borrar pero realmente solo se cambia el estado para que no se vea

app.get('/usuario', function (req, res) {
  res.json('get Usuario')
})

app.post('/usuario', function (req, res) {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje:'El nombre es necesario'
    });
  } else {
    res.json({
      datos_persona: body
    })
  }



})

app.put('/usuario/:pid', function (req, res) {

  let id = req.params.pid;


  res.json({
    id
  });
})

app.delete('/usuario', function (req, res) {
  res.json('delete Usuario')
})

app.listen(process.env.PORT, () => { // 3000 se cambio por la configuracion que esta en el archivo config.js
  console.log('Escuchando puerto ',process.env.PORT);
})
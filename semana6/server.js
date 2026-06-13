const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro',(req,res) =>{


 const nombre = req.body.nombre;
 const mensaje = req.body.mensaje;

 res.json({
  estado:"Datos recibidos",
 nombre:nombre,
 mensaje:mensaje
});
});

app.post('/incidencia',(req,res) => {

 const tipo = req.body.tipo;
 const descripcion = req.body.descripcion;

 res.json({
  mensaje:"incidencia registrada",
  tipo:tipo,
  descripcion: descripcion
});

});
 const puerto = 3000;
 app.listen(puerto, () => {
 console.log('servidor ejecutandose en puerto 3000');
});


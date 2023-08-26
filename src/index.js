import express from 'express';

//crear una isntancia de express
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
  console.log('Estoy en el puerto '+ app.get('port'))
})

console.log('hola mundo')
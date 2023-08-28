import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path' //viene de nodejs

//crear una isntancia de express
const app = express();
//configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
  console.log('Estoy en el puerto '+ app.get('port'))
})

//midlewares: funciones que se ejecutan antes de las rutas
app.use(cors()); //permite conexiones remotas
 
//permiten interpretar el formato JSON
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev')) //otorga más información sobre las peticiones en la consola 
//cargar un archivo estático
app.use(express.static(path.join(__dirname, '../public')));
// console.log(path.join(__dirname, '../public'));

//rutas
//http://localhost:4000/prueba
app.get('/prueba', (req, res)=>{
  res.send('esto es una prueba de una petición get')
})
import mongoose, { mongo } from "mongoose";

// const url = 'mongodb://127.0.0.1:27017/cafecito'; //el local host se puede escribir como 127.0.0.1 (base de dato local)
const url = 'mongodb+srv://minitrevi2:IOj8Xwzz8cscnbqb@cluster0.p3adzae.mongodb.net/cafecito'; //(cadena de conexión a mongoAtlas)

mongoose.connect(url);

const datosConexion = mongoose.connection

datosConexion.once('open', ()=>{
  console.log('BD conectada')
}) 
import mongoose, { mongo } from "mongoose";

const url = 'mongodb://127.0.0.1:27017/cafecito'; //el local host se puede escribir como 127.0.0.1

mongoose.connect(url);

const datosConexion = mongoose.connection

datosConexion.once('open', ()=>{
  console.log('BD conectada')
}) 
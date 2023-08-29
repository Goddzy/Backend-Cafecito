import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/productos/:id').get(obtenerProducto).put(editarProducto).delete(borrarProducto)
// app.get('/prueba', (req, res)=>{
//   res.send('esto es una prueba de una petición get')
// })

export default router;
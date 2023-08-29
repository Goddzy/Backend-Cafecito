import { Router } from "express";
import { crearProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/productos/:id').get(obtenerProducto)
// app.get('/prueba', (req, res)=>{
//   res.send('esto es una prueba de una petición get')
// })

export default router;
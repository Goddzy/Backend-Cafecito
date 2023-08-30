import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty().withMessage("El nombre del producto es un dato obligatorio")
        .isLength({min:2, max:100}).withMessage('el nombre del producto debe tener entre 2 y 100 caracteres'),
      check("precio")
      .notEmpty().withMessage('El precio es un dato obligatorio')
      .isNumeric().withMessage('El precio debe ser un número')
      .custom((value)=>{if (value >=10 && value <=10000){
        return true
      }else{
        throw new Error('El precio debe estar entre 1 y 10000')
      }
    }),
     check("imagen")
     .notEmpty().withMessage('La imagen es un dato obligatorio')
     .isLength({min:10, max:300}).withMessage('la imagen debe tener entre 10 y 300 caracteres')
     .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/).withMessage('URL inválida'),
     check("categoria")
     .notEmpty().withMessage('La categoría es un dato obligatorio')
     .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado']).withMessage('Debe ingresar una categoría válida')
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);
// app.get('/prueba', (req, res)=>{
//   res.send('esto es una prueba de una petición get')
// })

export default router;

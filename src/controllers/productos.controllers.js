import Producto from "../models/producto";
export const listarProductos = async (req, res) => {
  try {
    //buscar en la BD la collection de los productos
    const productos = await Producto.find();
    //envio la respuesta al frontend
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "Error al buscar los productos" });
  }
};
export const crearProducto = async (req, res) => {
  try {
    console.log(req.body);
    //tomar el body y validarlo
    //cuando los datos sean correctos, guardar el objeto en la BD
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save(); //el save lo guarda en la BS que está conectada en el backend
    res.status(201).json({ mensaje: "el producto fue creado correctamente" });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "ocurrio un error al intentar agregar un producto" });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //extraer el id de la ruta
    // console.log(req.params.id)
    //buscar en la BD el producto que coincida con el id
    const productoBuscado = await Producto.findById(req.params.id);
    //responder con el producto encontrado
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "error al buscar producto" });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //extraer el parámetro de la ruta y los datos del objeto que quiero actualizar
    //validar los datos y luego solicitar a la base de datos actualizar el producto
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    //respondemos al frontend
    res
      .status(200)
      .json({ mensaje: "el producto pudo ser editado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al intentar editar un producto" });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //buscar el id de la ruta y luego pedir a la base de datos borrar ese producto
    await Producto.findByIdAndDelete(req.params.id);
    //enviar respuesta al frontend
    res.status(200).json({mensaje:"El producto ha sido correctamente borrado"})
  } catch (error) {
    console.log(error);
    res.status(404).json({mensaje:"error al intentar borrar producto"})
  }
};

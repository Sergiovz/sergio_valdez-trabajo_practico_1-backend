
const resenaProduct = require('../models/models-Products');
const comments = require('../models/models-Comments');

const controlProducts = {};

// Rutas para render de vistas //



// Rutas para CRUD de Productos //

//obtener todos los productos
controlProducts.obtenerProducts = async (req, res) => {
    try {
        const products = await resenaProduct.findAll({
            where: {
                estado: true
            }});

            return res.json(products);
    } catch (error) {
        console.log("Error, no se pudo obtener los datos de los Productos", error);
        res.status(500).json({
            message: 'Error, no se pudo obtener los datos de los Productos'
        });
    }
};

//obtener un producto
controlProducts.obtenerProduct = async (req, res) => {
    try {
        const { id } = req.body
        const products = await resenaProduct.findByPk(id);
        return res.json(products)
    } catch (error) {
        console.log(error);
      return res.status(500).json({
        message: "Error al obtener el Producto",
      });
    }
};

//crear un producto
controlProducts.crearProduct = async (req, res) => {
    const { idProductos, nombreProducto, descripcionProducto, estado } = req.body
    try {
        const nuevoProducto = new resenaProduct({
            idProductos,
            nombreProducto,
            descripcionProducto,
            estado
    }); 
        await nuevoProducto.save();

      return res.status(201).json({
        message: 'Su Producto fue creada con éxito'
      });

    } catch (error) {
        console.log("Error al crear el Producto", error);
      return res.status(500).json({
        message: 'Error al crear el Producto'
      });
    }
};

//actualizar un producto
controlProducts.actualizarProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await resenaProduct.findByPk(id);
        
        await products.update(req.body);
        
        return res.status(201).json({ 
        message: "El Producto fue actualizada con éxito"
    });
    } catch (error) {
        console.log("Error al querer actualizar el Producto", error);
      return res.status(500).json({
        message: "Error al querer actualizar el Producto",
      });
    }
};

//eliminar un producto
controlProducts.eliminarProduct = async (req, res) => {
    try {
        const { id } = req.params;
  
        if (!id) {
          throw {
            status: 400,
            message: "El id del Producto no se ha enviado aún",
          };
        }
    
        const products = await resenaProduct.findByPk(id);
    
        if (!resenaProduct) {
          throw {
            status: 404,
            message: "El Producto no se ha encontrado",
          };
        }
    
        await resenaProduct.update({ estado: false });
    
        return res.json({
          message: "El Producto se ha eliminado correctamente"
        });
   
    } catch (error) {
        console.log("Error al querer eliminar el Producto", error);
      return res.status(error.status || 500).json({
        message: error.message || 'Error al querer eliminar el Producto',
      });
    }
};

module.exports = controlProducts;
//@ts-check
const router = require('express').Router();
const {
    obtenerProducts,
    obtenerProduct,
    crearProduct,
    actualizarProduct,
    eliminarProduct
} = require('../controllers/Productos')

router.get('/api/mis-productos', obtenerProducts);
router.get('/api/mis-productos/:id', obtenerProduct);
router.post('/api/mis-productos', crearProduct);
router.put('/api/mis-productos', actualizarProduct);
router.delete('/api/mis-productos', eliminarProduct)

module.exports = router;
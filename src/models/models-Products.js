//@ts-check
const {sequelize, DataTypes} = require('../../dataBase/database');

const resenaProduct = sequelize.define('Productos',{
    idProductos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProducto: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    descripcionProducto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    //    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    //    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Products'
});

resenaProduct.sync({ alter: true})
 .then(() => {
    console.log('Se ha creado la Tabla Products exitosamente')
});

module.exports = resenaProduct;
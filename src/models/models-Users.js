const { sequelize, DataTypes } = require('../../dataBase/database');

const user = sequelize.define('Usuarios',{
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING(100),
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
   tableName: "Users"
});

user.sync({ alter: true })
 .then(() => {
    console.log('Se ha creado la Tabla Users exitosamente')
});

module.exports = user
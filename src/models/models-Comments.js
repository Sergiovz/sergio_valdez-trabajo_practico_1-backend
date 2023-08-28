//@ts-check
const {sequelize, DataTypes} = require('../../dataBase/database');

const comment = sequelize.define('Comentarios', {
    idComentarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tituloComentarios: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcionComentarios: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')        
    },
    updatedAt: {
        type: DataTypes.DATE(6),
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE(6),
        allowNull: true
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Comments'
});

comment.sync({ alter : true}).then(() => {
    console.log('Se ha creado la Tabla Comments exitosamente');
});

module.exports = comment;
const user = require('../src/models/models-Users');
const resenaProduct = require('../src/models/models-Products');
const comment = require('../src/models/models-Comments');

const cardinalidadKeys = async() => {
    user.hasMany(resenaProduct);
    resenaProduct.belongsTo(user);

    user.hasMany(comment);
    comment.belongsTo(user);
};

module.exports = cardinalidadKeys;
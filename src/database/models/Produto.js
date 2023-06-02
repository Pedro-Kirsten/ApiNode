const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Produto = sequelize.define("produto", {
  nome: DataTypes.STRING,
  marca: DataTypes.STRING,
  preco: DataTypes.DOUBLE,

});

//create table if not exists...
const init = async () => {
  await Produto.sync();
};

init();

module.exports = Produto;
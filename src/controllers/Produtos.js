const Produto = require("../database/models/Produto");

module.exports = {
  all(req, res, next) {
    Produto.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { nome, marca, valor } = req.body;

    Produto.create({
      nome,
      marca,
      valor
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};
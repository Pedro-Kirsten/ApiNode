const express = require("express");
const router = express.Router();

const ProdutosController = require("./controllers/Produtos");

router.get("/produtos", ProdutosController.all);
router.post("/produtos", ProdutosController.create);

module.exports = router;
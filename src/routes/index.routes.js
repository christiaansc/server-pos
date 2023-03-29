const express = require("express");
const router = express.Router();

const categoriaRoutes = require("./categorias.routes");

router.use(categoriaRoutes);

module.exports = router;

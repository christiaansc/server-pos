const express = require("express");
const router = express.Router();

const categoriaRoutes = require("./categorias.routes");
const ventasRoutes = require("./ventas.routes");


router.use(categoriaRoutes);
router.use(ventasRoutes);



module.exports = router;

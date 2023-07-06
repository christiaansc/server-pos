const express = require('express');

const router = express.Router();




const ventaController = require("../controller/ventaController");

router.get("/ventas", ventaController.getVentas);
router.get("/ventas/:id" , ventaController.getVenta);

module.exports = router;


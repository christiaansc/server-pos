const express = require("express");
const router = express.Router();

const categoriasController = require("../controller/categoriasController");

router.get("/categorias", categoriasController.getCategorias);
router.get("/categorias/:idcategoria", categoriasController.getCategoria);
router.post("/categorias", categoriasController.addCategoria);
router.put("/categorias/:idcategoria", categoriasController.updateCategoria);
router.delete("/categorias/:idcategoria", categoriasController.deleteCategoria);

module.exports = router;

const Model = require("../models");

exports.getVentas = async (req, res) => {
  try {
    const ventas = await Model.ventasModel.findAll();
    return res.status(200).json(ventas);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getVenta = async (req, res) => {
  try {
    const { id } = req.params;

    const venta = await Model.ventasModel.findOne({
      where: { id },
    });
    if (!venta)
      return res
        .status(404)
        .json({ error: "No se encuentra una Venta  con ese id" });
    return res.status(200).json(venta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

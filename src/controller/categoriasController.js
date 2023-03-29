const Model = require("../models");

const categoriaSchema = require("../schema/categoriaSchema");

exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Model.categoriasModel.findAll({
      where: {
        activo: true,
      },
      order: [["id", "ASC"]],
    });
    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getCategoria = async (req, res) => {
  try {
    const { idcategoria } = req.params;
    const categoria = await Model.categoriasModel.findOne({
      where: { id: idcategoria },
    });
    if (!categoria)
      return res
        .status(404)
        .json({ error: "No se encuentra una categoria  con ese id" });
    return res.status(200).json(categoria);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.addCategoria = async (req, res) => {
  try {
    const categoriaData = req.body;

    const validate = categoriaSchema.categoriaSchemaAddCategoria(categoriaData);
    if (validate)
      return res.status(422).json({ error: validate.details[0].message });

    const verifyName = await Model.categoriasModel.findOne({
      where: { nombre: req.body.nombre },
    });

    if (verifyName)
      return res
        .status(404)
        .json({ error: "Error, ya existe categoria con ese Nombre" });

    const categoriaCreate = await Model.categoriasModel.create({
      ...categoriaData,
    });
    // console.log(categoriaCreate);
    if (!categoriaCreate)
      return res
        .status(500)
        .json({ error: "Error, no se pudo guardar la categoria" });

    return res.status(201).json(categoriaCreate);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  const { idcategoria } = req.params;
  const categoria = req.body;

  try {
    const validate = categoriaSchema.categoriaSchemaUpdateCategoria(categoria);
    if (validate)
      return res.status(422).json({ error: validate.details[0].message });

    const catgoriaFound = await Model.categoriasModel.findOne({
      where: { id: idcategoria },
      attributes: ["id", "nombre", "descripcion"],
    });

    if (!catgoriaFound)
      return res
        .status(404)
        .json({ error: "Error, NO existe catogiria con ese id" });

    const verifyName = await Model.categoriasModel.findOne({
      where: { nombre: req.body.nombre },
    });

    if (verifyName)
      return res
        .status(404)
        .json({ error: "Error, ya existe categoria con ese Nombre" });

        const buildCategoria = {
          ...catgoriaFound.get({ plain: true }),
          ...categoria,
        };

    const [categoriaUpdate] = await Model.categoriasModel.update(buildCategoria, {
      where: {
        id: idcategoria,
      },
    });
    if (!categoriaUpdate)
      return res
        .status(500)
        .json({ error: "Error al actualizar la categoria" });
    return res.status(200).json(buildCategoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteCategoria = async (req, res) =>{
   const {idcategoria} = req.params;

   
   try {
     const categoriaFound = Model.categoriasModel.findOne({
       where:{id:idcategoria}
      })
      console.log(categoriaFound);
      if (!categoriaFound)
      return res.status(404).json({
        error: 'Error, no existe una categoria asociado a esa id ',
      });

      const categoriaDel = await Model.categoriasModel.destroy({
        where:{id:idcategoria}
      });
      if (!categoriaDel)
      return res.status(404).json({
        error: 'Error, no se pudo eliminar la categoria seleccionada',
      });

      return res.status(200).json(categoriaDel);
            
   } catch (error) {
      return res.status(500).json({ error: error.message});
   }

}

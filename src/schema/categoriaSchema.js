const Joi = require('joi')

exports.categoriaSchemaAddCategoria = body => {
    const schema = Joi.object().keys({
      nombre: Joi.string().allow(null, '').required(),
      descripcion: Joi.string().allow(null, '').required(),
    });
    const { error } = schema.validate(body);
    return error;
  };


  exports.categoriaSchemaUpdateCategoria = body =>{
    const schema = Joi.object().keys({
      nombre: Joi.string().allow(null, '').required(),
      descripcion: Joi.string().allow(null, '').required(),
      activo: Joi.boolean().optional(),
      
    });
    const {error} = schema.validate(body);
    return error;
  }
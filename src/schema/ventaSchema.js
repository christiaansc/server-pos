const Joi = require('joi')

exports.ventaSchemaAddVenta = body => {
    const schema = Joi.object().keys({
      nombre: Joi.string().allow(null, '').required(),
      descripcion: Joi.string().allow(null, '').required(),
    });
    const { error } = schema.validate(body);
    return error;
  };


const Joi = require("joi");

const seriesSchema = Joi.object()
  .keys({
    nombre: Joi.string().required().min(3).max(255).messages({
      "any.required": "nombre es requerido",
      "string.min": "nombre debe tener como mínimo {#limit} caracteres",
      "string.max": "nombre debe tener como máximo {#limit} caracteres",
      "string.empty": "nombre no puede ser vacio",
    }),
    plataforma: Joi.string()
      .required()
      .valid("Netflix", "Star+", "Flow", "Disney")
      .messages({
        "any.required": "plataforma es requerido",
        "any.only": "Las plataformas disponbiles son netflix,star+, flow",
      }),
    temporadas: Joi.number().required().min(1).max(10000).message({
      "any.required": "teporadas es requerido",
      "number.min": "temporadas {#limit} valor mínimo",
      "number.max": "temporadas {#limit} valor máximo",
    }),
    disponible: Joi.boolean().required().messages({
      "any.required": "disponbile es requerido",
    }),
  })
  .unknown(false)
  .messages({
    "object.unknown": "El atributo {#label} no está permitido.",
  });

module.exports = seriesSchema;

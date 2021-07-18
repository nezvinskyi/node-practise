const Joi = require('joi');

const updateCategorySchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
}).min(1);

module.exports = updateCategorySchema;

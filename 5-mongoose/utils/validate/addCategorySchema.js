const Joi = require('joi');

const addCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = addCategorySchema;

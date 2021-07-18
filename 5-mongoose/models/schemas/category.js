const { Schema } = require('mongoose');
const Joi = require('joi');

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, 'Category name must be more than 1 symbol'],
    },
    description: {
      type: String,
      required: true,
      minlength: [2, 'Category name must be more than 1 symbol'],
    },
  },
  { versionKey: false, timestamps: true },
);

// categorySchema.methods.validateData = function (newCategory) {
//   const schema = Joi.object({
//     name: Joi.string().min(2).required(),
//     description: Joi.string().min(2).required(),
//   });
//   const { error } = schema.validate(newCategory);
//   return error;
// };

const validateCategory = newCategory => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(newCategory);
  return error;
};

module.exports = { categorySchema, validateCategory };

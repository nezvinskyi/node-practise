const { Category } = require('../models');
// const { addCategorySchema, updateCategorySchema } = require('../utils/validate');

const getAll = () => {
  return Category.find({});
};

const getById = async id => {
  try {
    const result = await Category.findById(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const add = newCategory => {
  // const { error } = addCategorySchema.validate(newCategory);
  // if (error) {
  //   return null;
  // }

  // ----
  // const error = Category.methods.validateData(newCategory);
  // console.log(error);
  // if (error) return null;

  return Category.create(newCategory);
};

const update = async (id, body) => {
  try {
    // const { error } = updateCategorySchema.validate(body);
    // if (error) {
    //   return null;
    // }

    const result = await Category.findByIdAndUpdate(id, body, { new: true });
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const del = async id => {
  try {
    const result = await Category.findByIdAndDelete(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  del,
};

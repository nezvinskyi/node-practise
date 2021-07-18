const { Product } = require('../models');

const getAll = () => {
  return Product.find({}).populate('category', 'name');
};

const getById = async id => {
  try {
    const result = await Product.findById(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

const add = newProduct => {
  return Product.create(newProduct);
};

const update = async (id, body) => {
  try {
    const result = await Product.findByIdAndUpdate(id, body, { new: true });
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
    const result = await Product.findByIdAndDelete(id);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  del,
};

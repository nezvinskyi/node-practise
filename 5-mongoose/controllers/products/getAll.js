const { product: service } = require('../../services/');

const getAll = async (_, res, next) => {
  try {
    const result = await service.getAll();
    res.status(200).json({
      status: 'Success',
      code: 200,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;

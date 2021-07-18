const { product: service } = require('../../services');

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await service.getById(id);
    if (!result) {
      res.status(404).json({
        status: 'Error',
        code: 404,
        message: 'Not found',
      });
    }
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;

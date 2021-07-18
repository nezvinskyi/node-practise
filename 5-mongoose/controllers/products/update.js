const { product: service } = require('../../services');

const update = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const result = await service.update(id, body);
    res.status(200).json({
      status: 'Success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;

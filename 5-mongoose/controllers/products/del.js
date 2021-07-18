const { product: service } = require('../../services');

const del = async (req, res, next) => {
  const { id } = req.params;
  const result = await service.del(id);
  if (!result) {
    res.status(404).json({
      status: 'Error',
      code: 404,
      message: 'Not found',
    });
  }
  res.status(200).json({
    status: 'Success',
    code: 200,
  });
};

module.exports = del;

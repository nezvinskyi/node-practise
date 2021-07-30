const {cart: service} = require("../../services");

const getAll = async(req, res, next) => {
    const {_id} = req.user;
    try {
        const result = await service.getOne({userId: _id})
    }
}
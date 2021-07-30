const {user: service} = require("../../services");

const register = async (req, res, next) => {
    const {email, password} = req.body;
    try{
        const result = await service.getOne({email});
        if(result){
            res.status(409).json({
                status: "error",
                code: 409,
                message: "Already register"
            });
            return;
        }
        await service.add({email, password});
        res.status(201).json({
            status: "success",
            code: 201,
            message: "success"
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = register;
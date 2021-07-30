const jwt = require("jsonwebtoken");
require("dotenv").config();

const {user: service} = require("../../services");

const login = async (req, res, next) => {
    console.log(req.body)
    const {email, password} = req.body;
    try {
        const user = await service.getOne({email});

        if(!user || !user.comparePassword(password)) {
            res.status(400).json({
                status: "error",
                code: 400,
                message: "Неверный email или пароль"
            });
            return;
        }
        const {SECRET_KEY} = process.env;
        const payload = {
            id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY);
        await service.updateById(user._id, {token});
        res.json({
            status: "success",
            code: 200,
            data: {
                result: token
            }
        })
        // if(!user) {
        //     res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "Пользователя с таким email не существует"
        //     });
        //     return;
        // }
        // if(!user.comparePassword(password)){
        //     res.status(400).json({
        //         status: "error",
        //         code: 400,
        //         message: "Неверный пароль"
        //     });
        //     return;
        // }
    }
    catch(error){
        next(error);
    }

};

module.exports = login;
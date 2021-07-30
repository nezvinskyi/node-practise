const jwt = require("jsonwebtoken");
require("dotenv").config();

const {user: service} = require("../../services");

/*
/profile

1. Извлечь токен из заголовка Authorization
2. Проверить его на валидность
3. Если все ок - найти в базе пользователя с нужным id и отправить часть его данных в ответе
4. Если нет - отправить статус 401
*/

const getProfile = async (req, res, next) => {
    
    const userProfile = {
        email: req.user.email,
        _id: req.user._id
    };
    res.json({
        status: "success",
        code: 200,
        data: {
            result: userProfile
        }
    })
};

module.exports = getProfile;
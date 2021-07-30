const passport = require("passport");
const {ExtractJwt, Strategy} = require("passport-jwt");
require("dotenv").config();

const {user: service} = require("../services");

const {SECRET_KEY} = process.env;

const settings = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
};
// req, setting => Strategy
/*
1. Извлекает токен из запроса.
2. Расшифровывает его с помощью ключа.
3. Если токен поддельный (раасшифровка неудачна) - отправляет ответ с 401 кодом и словом Unautorized
4. Если токен валиден (успешно расшифрован) - передает управление колбеку, 
который указан вторым аргументом. 
5. Извлекаем пользователя с _id === payload.id из базы
*/
const jwtStrategy = new Strategy(settings, async (payload, done)=>{
    try {
        const user = await service.getById(payload.id);
        if(!user){
            throw new Error("Not found");
        }
        done(null, user);
    }
    catch(error){
        done(error);
    }
})

passport.use("jwt", jwtStrategy);

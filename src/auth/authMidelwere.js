const { getById } = require("../users/users.controllers");

const JwtStrategy = require("passport-jwt").Strategy,
        ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: "Goku" // debe estar en una variable de entorno
    };
    passport.use(
        new JwtStrategy(opts, (decoded, done) => {
            const data=getById(decoded.id)
            if(data){
                console.log("decoded jwt", decoded,"hola si estoy aqui");
                return done(null, decoded); // decoded sera el que retornaremos cuando se ejecute exitosamente la autenticacion
            }else{
                return done(null,false)
            }
           
        })
    );
};
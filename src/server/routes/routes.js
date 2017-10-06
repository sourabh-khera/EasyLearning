/**
 * Created by sourabh on 3/10/17.
 */
const passport = require("passport");
const googleStrategy = require("../auth/googleAuth");
const jwt_Token = require("jsonwebtoken");
const cors = require('cors');

const loggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt_Token.verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    res.status(500).send("invalid token")
                } else {
                    const decodedData = jwt_Token.decode(token);
                    req.empId = decodedData.id;
                    next();
                }
            }
        )
    } else {
        res.send("plz send the token")
    }

};
module.exports = (app) => {

    app.use(passport.initialize());
    app.use(cors());
    googleStrategy.useGoogle();

    app.get("/login", passport.authenticate('google', {
        session: false,
        scope: ['profile', 'email']
    }));

    app.get("/oauth2callback", passport.authenticate('google'), (req, res) => {

        const employee = {
            empId: req.user.id
        };

        const token = jwt_Token.sign(employee, process.env.SECRET_KEY, {expiresIn: 5000});
        if (true) {
            res.cookie('token', token, {
                httpOnly: false
            });
            // redirect to home page
            res.redirect('')
        } else {
            res.redirect('/')
        }
    })

};
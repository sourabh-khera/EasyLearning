const passport = require("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const googleAuthConstants = require("../constants/constants");
const EmployeeSchema = require("../api/employee/employee.model");

exports.useGoogle = () => {
    passport.use(new googleStrategy({
            clientID: googleAuthConstants.clientID,
            clientSecret: googleAuthConstants.clientSecret,
            callbackURL: googleAuthConstants.callbackUrl,
        },
        (accessToken, refreshToken, profile, done) => {
            if (profile._json.domain === 'tothenew.com') {
                EmployeeSchema.findOne({
                    email: profile.emails[0].value
                }, (err, user) => {
                    if (user) {
                        return done(null, user)
                    }
                    else {
                        EmployeeSchema.create({
                                empName: profile.displayName,
                                email: profile.emails[0].value,
                                image: profile._json.image.url,
                            }, (err, user) => {
                                return done(null, user)
                            }
                        )
                    }

                })
            }
            else {
                return done(null)
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

};
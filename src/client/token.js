/**
 * Created by sourabh on 4/10/17.
 */

const extractToken = () => {
    let token;

    const tokenString = document.cookie.split(";").find((cookie) => {
        cookie.includes('token')
    });

    if (tokenString) {
        token = tokenString.split("=")[1];
    }

    return token;


};

export default extractToken;
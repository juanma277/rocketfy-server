const jwt = require('jsonwebtoken');

const generateJWT = (user) => {
    return new Promise((resolve, reject) => {
        const { _id, name, nickname, last_connection, team } = user;
        const payload = { _id, name, nickname, last_connection, team };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {}, (err, token) => {
            if (err) {
                console.log(err);
                reject(null);
            } else {
                resolve(token);
            }
        });

    });
}

module.exports = {
    generateJWT
}
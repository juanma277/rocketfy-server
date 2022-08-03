const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const validateJWT = async(req, res, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'Not authorized'
        });
    }

    try {
        const { _id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const user = await User.findById(_id);

        if (!user || !user.status) {
            return res.status(401).json({
                msg: 'Not authorized - Token invalid'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Not authorized - Token invalid'
        });
    }
}

module.exports = {
    validateJWT
}
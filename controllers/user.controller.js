const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');

const usersPost = async(req, res) => {
    const { name, password, nickname, team } = req.body;
    const user = new User({ name, password, nickname, team });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();
    res.json(user);
}

module.exports = {
    usersPost
}
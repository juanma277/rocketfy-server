const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt-generate');

const login = async(req, res) => {
    const { nickname, password } = req.body;

    try {
        const user = await User.findOne({ nickname });
        if (!user) {
            return res.status(400).json({ msg: 'Credentials incorrects' });
        }
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ msg: 'Credentials incorrects' });
        }
        const token = await generateJWT(user);
        if (!token) {
            return res.status(400).json({
                msg: 'Error, JWT not generate'
            });
        }

        await User.findByIdAndUpdate(user._id, { last_connection: Date.now(), new: true });

        res.json({ token, name: user.name, nickname: user.nickname, team: user.team, last_connection: user.last_connection });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Internal server error'
        })
    }

}

module.exports = {
    login
}
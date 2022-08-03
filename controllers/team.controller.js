const Team = require('../models/team.model');

const teamsAll = async(req, res) => {
    try {
        const teams = await Team.find({});
        res.json(teams);
    } catch (error) {
        return res.status(500).json({
            msg: 'Internal server error'
        });
    }
}

module.exports = {
    teamsAll
}
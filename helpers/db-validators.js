const Team = require('../models/team.model');
const User = require('../models/user.model');

const isTeamValid = async(team = '') => {
    const existTeam = await Team.findOne({ name: team });
    if (!existTeam) {
        throw new Error('Team not valid');
    }
}

const isNickNameValid = async(nickname = '') => {
    const nicknameExist = await User.findOne({ nickname });
    if (nicknameExist) {
        throw new Error('User already exists');
    }
}

module.exports = {
    isTeamValid,
    isNickNameValid
}
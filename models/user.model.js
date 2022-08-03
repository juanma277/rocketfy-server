const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    password: {
        type: String,
        require: [true, 'Pasword is required']
    },
    nickname: {
        type: String,
        require: [true, 'Nickname is required'],
        unique: true
    },
    team: {
        type: String,
        require: [true, 'Team is required']
    },
    status: {
        type: Boolean,
        default: true
    },
    last_connection: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.methods.toJSON = function() {
    const { password, ...user } = this.toObject();
    return user;
}

module.exports = model('User', UserSchema);
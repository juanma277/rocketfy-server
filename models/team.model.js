const { Schema, model } = require('mongoose');

const TeamSchema = Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Team', TeamSchema);
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }


}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
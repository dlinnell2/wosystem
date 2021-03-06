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
        name: {
            type: String,
            required: true
        },
        locationId: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
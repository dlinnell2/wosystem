var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    parent: {
        name:{
            type:String,
        },
        id:{
            type:String
        }
    },
    children: [
        {
            name: String,
            id: String,
        }
    ]

}, {
    timestamps: true
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
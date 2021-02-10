var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    parent: {
        name:String,
        parentId:String
    },
    children: [
        {
            name: String,
            childId: String,
        }
    ]

}, {
    timestamps: true
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WOSchema = new Schema({

    description: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    submittedBy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    actionsTaken: String,
    notes: String,
    category: String,
    laborHours: [
            {
                employee: {
                    type: String,
                    required: true
                },
                date: {
                    type: String,
                    required: true
                },
                hours: {
                    type: Number,
                    required: true
                }
            }
        ]


}, {
    timestamps: true
});


var WO = mongoose.model("WO", WOSchema);

module.exports = WO;
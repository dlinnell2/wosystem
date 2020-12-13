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
    id: {
        type: Number,
        required: true
    },
    actionsTaken: String,
    notes: String,
    category: String,
    laborHours: [
            {
                employee: String,
                date: String,
                hours: String,
            }
        ]


}, {
    timestamps: true
});

const WO = mongoose.model('WO', WOSchema);

module.exports = WO;
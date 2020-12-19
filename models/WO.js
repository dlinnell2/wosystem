var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

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
    actionTaken: String,
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

WOSchema.plugin(AutoIncrement, {inc_field: 'id'})
const WO = mongoose.model('WO', WOSchema);

module.exports = WO;
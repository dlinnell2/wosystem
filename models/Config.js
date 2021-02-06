var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConfigSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    orders: [
        {
            orderId: Schema.Types.ObjectId
        }
    ],
    components: [
        {
            componentId: String
        }
    ],
    parent: String,
    installDate: String,
    inService: Boolean 

}, {
    timestamps: true
});

const Config = mongoose.model('Config', ConfigSchema);

module.exports = Config;
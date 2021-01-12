var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AssetSchema = new Schema({

    assetName: {
        type: String,
        required: true
    },
    assetType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    orders: [
        {
            type: String
        }
    ],
    components: [
        {
            type: String
        }
    ],
    parent: String,
    installDate: String 

}, {
    timestamps: true
});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
const db = require("../models");

module.exports = {

    getList: function (req, res) {
        db.Asset
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    addNewWO: function(req, res) {
        db.Asset
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Asset  
            .findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },

    findByIdAndUpdate: function(req, res) {
        db.Asset
            .findByIdAndUpdate(req.params.id, req.body,{new:true})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
};
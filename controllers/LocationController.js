const db = require("../models");

module.exports = {

    getAll: function (req, res) {
        db.Location
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getMany: function (req, res) {
        db.Location
            .find({'_id': { $in: req.body}})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },

    addNew: function(req, res) {
        db.Location
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.Location  
            .findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },

    findByIdAndUpdate: function(req, res) {
        db.Location
            .findByIdAndUpdate(req.params.id, req.body,{new:true})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
};
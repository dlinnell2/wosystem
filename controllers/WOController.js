const db = require("../models");

module.exports = {

    getList: function (req, res) {
        db.WO
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getMany: function (req, res) {
        console.log(req.body)
        db.WO
            .find({'_id': { $in: req.body}})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },

    addNewWO: function(req, res) {
        db.WO
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    findById: function(req, res) {
        db.WO  
            .findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    },

    findByIdAndUpdate: function(req, res) {
        db.WO
            .findByIdAndUpdate(req.params.id, req.body,{new:true})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
};
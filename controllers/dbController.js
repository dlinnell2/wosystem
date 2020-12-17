const db = require("../models");

module.exports = {

    getList: function (req, res) {
        db.WO
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    addNewWO: function(req, res) {
        db.WO
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    getOne: function(req, res) {
        console.log(req.params)
        db.WO  
            .findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err))
    }
};
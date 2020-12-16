const db = require("../models");

module.exports = {

    getList: function (req, res) {
        db.WO
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    addNewWO: function(req, res) {
        console.log('dbController')
        db.WO
            .create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    }
};
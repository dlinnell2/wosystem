const db = require("../models");
const bcrypt = require('bcrypt')

module.exports = {

    getAll: function (req, res) {
        db.User
            .find({})
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },

    /* getMany: function (req, res){
        db.Location
        .find({'parent.parentId':req.params.id}, null, {sort:{name:1}})
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err))
    }, */

    addNew: function (req, res) {
        let { lastName, firstName, email, pass, location, role } = req.body;

        db.User.findOne({ email: email })
            .then(user => {
                if (user) {
                    return res.status(422).json({ errors: [{ user: "email already exists" }] });
                } else {
                    const user = new User({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        pass: pass,
                        location: location,
                        role: role
                    });
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(password, salt, function (err, hash) {
                            if (err) throw err;
                            user.password = hash;
                            user.save()
                                .then(response => {
                                    res.status(200).json({
                                        success: true,
                                        result: response
                                    })
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        errors: [{ error: err }]
                                    });
                                });
                        });
                    });
                }
            }).catch(err => {
                res.status(500).json({
                    errors: [{ error: 'Something went wrong' }]
                });
            })
    },

    /*  findById: function(req, res) {
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
     } */
};
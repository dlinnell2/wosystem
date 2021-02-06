const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/wosystem",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const locationSeed = [
    {
        name: "Houston",
        parent: {},
        children: []
    },
    {
        name: "North",
        parent: {},
        children: []
    },
    {
        name: "Nexus",
        parent: {},
        children: []
    },
    {
        name: "Dream",
        parent: {},
        children: []
    },
    {
        name: "3D",
        parent: {},
        children: []
    },
    {
        name: "Generations",
        parent: {},
        children: []
    },
    {
        name: "Nexus Primary",
        parent: {},
        children: []
    },
    {
        name: "Nexus Middle",
        parent: {},
        children: []
    }
];

db.Location
    .deleteMany({})
    .then(() => db.Location.collection.insertMany(locationSeed))
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
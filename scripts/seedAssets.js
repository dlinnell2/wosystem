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

const woSeed = [
  {
    name: 'RTU 1',
    type: 'HVAC',
    subcategory: 'RTU',
    location:'North',
    inService: true
  },{
    name: 'Toilet 1',
    type: 'Plumbing',
    subcategory: 'Toilet',
    location:'Nexus',
    inService: true
  }, {
    name: 'Bard 1',
    type: 'HVAC',
    subcategory: 'Bard',
    location:'North',
    inService: true
  }
];

db.Asset
  .deleteMany({})
  .then(() => db.Asset.collection.insertMany(woSeed))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
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
    description: "Test number 1",
    assignedTo: "Elmer",
    location: "Dream",
    submittedBy: "Donald",
    status: "New"
  },{
      description: "Test number 2",
      assignedTo: "Lane",
      location: "Nexus Primary",
      submittedBy: "Claudia",
      status: "In Progress"
  }
];

db.WO
  .deleteMany({})
  .then(() => db.WO.collection.insertMany(woSeed))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(routes);

app.get('api/hello', (req, res) => {
  console.log('request received')
  res.send({ express: 'Hello From Express' });
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/wosystem");

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
  // Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
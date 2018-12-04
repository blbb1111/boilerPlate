const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/queries.js');

let port = process.env.PORT || 3000;
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb', parameterLimit: 100000}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/favorites', (req, res) => {
  let filter = req.query.filter;
  db.getFav()
  res.json(123);
});

app.post('/favorites/:id', (req, res) => {

  new Promise((resolve, reject) => {
    db.addFav(req.params.id, req.body, (err, data) => { 
      if (err) { reject(err) } else {
        resolve(data);
      }})
  })
  .then((result) => { res.json(result) })
  .catch((err) => { console.log(err); res.status(404) })
});

app.listen(port, () => {
  console.log(`Connecting to Server on port ${port}`);
})


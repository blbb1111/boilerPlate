const pg = require('pg');

const dbString = "postgresql://postgres@localhost:5432/myyoutube?ssl=false"

let db = new pg.Client(dbString);
db.connect();

module.exports = db;
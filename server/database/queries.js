var db = require('./index.js');

// const getCreatedAt = (user_id, cb) => {
//   let qs = `SELECT created_at FROM users WHERE id = ${user_id}`;
//   db.query(qs, cb);
// };

// const getUserInfo = (user_id, cb) => {
//   let qs = `SELECT * FROM users WHERE id = ${user_id}`;
//   db.query(qs, cb);
// };

// const getJobsInfo = (user_id, cb) => {
//   let qs = `SELECT * FROM jobs WHERE user_id = ${user_id}`;
//   db.query(qs, cb);
// };
const getFav = (filter, cb) => {
  let string = `SELECT id FROM favorites WHERE ${filter} = true`
  db.query(string, cb);
  
}

const addFav = (identifier, info, cb) => {

  let string = `INSERT INTO favorites (id, music, comedy, educational, history, etc) VALUES ('${identifier}', ${info.Music}, ${info.Comedy}, ${info.Educational}, ${info.History}, ${info.Etc})`;

  db.query(string, cb)
}

module.exports = {
  // getCreatedAt: getCreatedAt,
  // getUserInfo: getUserInfo,
  // getJobsInfo: getJobsInfo
  addFav : addFav
};

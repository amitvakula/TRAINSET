const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./intraday_fitbit.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the intraday_fitbit database.');
});

let subject = `SELECT subject_id,
                      datetime,
                      step,
                      device_id
              FROM fitbit_entries
              WHERE subject_id = 7
              ORDER BY datetime`;

db.each(subject, [], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`Subject ${row.subject_id} has ${row.step} detected from ${row.device_id} at ${row.datetime}.`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
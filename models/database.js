const sqlite3 = require('sqlite3').verbose();

// TODO: Error handling for DB connection
const db = new sqlite3.Database('./project.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.serialize(() => {
      // Create Refills table
      db.run(`
        CREATE TABLE IF NOT EXISTS Refills (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          fuelPrice REAL NOT NULL,
          refillCost REAL NOT NULL,
          odometerReading INTEGER NOT NULL,
          date TEXT NOT NULL,
          createdAt TEXT DEFAULT (datetime('now')),
          updatedAt TEXT DEFAULT (datetime('now'))
        )
      `, (err) => {
        if (err) {
          console.error("Error creating Refills table", err.message);
        } else {
          console.log("Refills table created or already exists.");
        }
      });

      // Create Settings table
      db.run(`
        CREATE TABLE IF NOT EXISTS Settings (
          id INTEGER PRIMARY KEY CHECK (id = 1),
          currentFuelPrice REAL NOT NULL,
          updatedAt TEXT DEFAULT (datetime('now'))
        )
      `, (err) => {
        if (err) {
          console.error("Error creating Settings table", err.message);
        } else {
          console.log("Settings table created or already exists.");
          // Insert default settings row
          db.run(`
            INSERT OR IGNORE INTO Settings (id, currentFuelPrice) VALUES (1, 0.0)
          `, (err) => {
            if (err) {
              console.error("Error inserting default settings", err.message);
            } else {
              console.log("Default settings inserted or already exist.");
            }
          });
        }
      });
    });
  }
});

module.exports = db;

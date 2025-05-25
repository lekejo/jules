const db = require('../models/database');

// GET /refills - List all refills
exports.getAllRefills = (req, res) => {
  db.all("SELECT * FROM Refills ORDER BY date DESC", [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving refills");
    }
    // TODO: Create views/refills/index.ejs later
    res.render('refills/index', { title: 'All Refills', refills: rows });
  });
};

// GET /refills/new - Show form to add new refill
exports.getNewRefillForm = (req, res) => {
  db.get("SELECT currentFuelPrice FROM Settings WHERE id = 1", [], (err, setting) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving settings for new refill form");
    }
    // TODO: Create views/refills/form.ejs or new.ejs later
    res.render('refills/form', {
      title: 'Add New Refill',
      currentFuelPrice: setting ? setting.currentFuelPrice : 0.0,
      refill: {}, // For form reusability (empty for new)
      actionUrl: '/refills' // Form POSTs to /refills
    });
  });
};

// POST /refills - Create a new refill
exports.createRefill = (req, res) => {
  const { refillCost, odometerReading, date } = req.body;
  // Basic validation
  if (!refillCost || !odometerReading || !date) {
    // TODO: Add better validation and user feedback
    return res.status(400).send("Missing required fields.");
  }

  db.get("SELECT currentFuelPrice FROM Settings WHERE id = 1", [], (err, setting) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving settings for creating refill");
    }
    if (!setting) {
        return res.status(500).send("Fuel price setting not found.");
    }

    const fuelPrice = setting.currentFuelPrice;
    const sql = `INSERT INTO Refills (fuelPrice, refillCost, odometerReading, date, createdAt, updatedAt)
                 VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))`;
    db.run(sql, [fuelPrice, refillCost, odometerReading, date], function(err) {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Error creating refill");
      }
      res.redirect('/refills');
    });
  });
};

// GET /refills/:id/edit - Show form to edit a refill
exports.getEditRefillForm = (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM Refills WHERE id = ?", [id], (err, refill) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error retrieving refill for editing");
    }
    if (!refill) {
      return res.status(404).send("Refill not found");
    }
    // TODO: Create views/refills/form.ejs or edit.ejs later
    res.render('refills/form', {
      title: 'Edit Refill',
      currentFuelPrice: refill.fuelPrice, // Use the price at the time of refill for editing
      refill: refill,
      actionUrl: `/refills/${id}` // Form POSTs to /refills/:id
    });
  });
};

// POST /refills/:id - Update an existing refill
exports.updateRefill = (req, res) => {
  const { id } = req.params;
  const { fuelPrice, refillCost, odometerReading, date } = req.body; // fuelPrice is part of body
  
  // Basic validation
  if (!fuelPrice || !refillCost || !odometerReading || !date) {
    return res.status(400).send("Missing required fields for update.");
  }

  const sql = `UPDATE Refills 
               SET fuelPrice = ?, refillCost = ?, odometerReading = ?, date = ?, updatedAt = datetime('now')
               WHERE id = ?`;
  db.run(sql, [fuelPrice, refillCost, odometerReading, date, id], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error updating refill");
    }
    if (this.changes === 0) {
        return res.status(404).send("Refill not found or no changes made.");
    }
    res.redirect('/refills');
  });
};

// POST /refills/:id/delete - Delete a refill
exports.deleteRefill = (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM Refills WHERE id = ?", [id], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error deleting refill");
    }
    if (this.changes === 0) {
        return res.status(404).send("Refill not found for deletion.");
    }
    res.redirect('/refills');
  });
};

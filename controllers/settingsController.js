const db = require('../models/database');

// GET /settings - Render settings page
exports.getSettings = (req, res) => {
  db.get("SELECT currentFuelPrice FROM Settings WHERE id = 1", [], (err, row) => {
    if (err) {
      console.error(err.message);
      // TODO: Render an error page or pass error to next middleware
      return res.status(500).send("Error retrieving settings");
    }
    // TODO: Create views/settings.ejs later
    // For now, send JSON or a placeholder
    res.render('settings', { 
        title: 'Settings', 
        currentFuelPrice: row ? row.currentFuelPrice : 0.0 
    }); 
  });
};

// POST /settings - Update fuel price
exports.updateSettings = (req, res) => {
  const { currentFuelPrice } = req.body;
  if (currentFuelPrice === undefined || isNaN(parseFloat(currentFuelPrice))) {
    // TODO: Add proper validation and user feedback
    return res.status(400).send("Invalid fuel price provided.");
  }

  const newPrice = parseFloat(currentFuelPrice);
  // The Settings table has id=1 as per schema, and an INSERT OR IGNORE was done.
  // So, we should always UPDATE.
  db.run("UPDATE Settings SET currentFuelPrice = ?, updatedAt = datetime('now') WHERE id = 1", [newPrice], function(err) {
    if (err) {
      console.error(err.message);
      // TODO: Render an error page or pass error to next middleware
      return res.status(500).send("Error updating settings");
    }
    if (this.changes === 0) {
        // This case should ideally not happen if the default row was inserted correctly
        return res.status(500).send("Failed to update settings, settings record not found.");
    }
    res.redirect('/settings'); // Redirect back to settings page to see the change
  });
};

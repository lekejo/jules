const db = require('../models/database');

exports.getDashboardData = (req, res) => {
  // Fetch all refills, sorted by date and then odometer to handle multiple refills on the same day correctly.
  // It's crucial that odometer readings are strictly increasing for correct calculations.
  const sql = "SELECT * FROM Refills ORDER BY date ASC, odometerReading ASC";

  db.all(sql, [], (err, refills) => {
    if (err) {
      console.error("Error fetching refills for dashboard:", err.message);
      return res.status(500).send("Error calculating dashboard data.");
    }

    const stats = {
      totalRefills: refills.length,
      totalSpent: 0,
      totalOdometerDistance: 0,
      overallKmPerLitre: 0,
      overallLitrePer100Km: 0,
      overallCostPerKm: 0,
      refillDetails: [] // To store per-refill calculations
    };

    if (refills.length === 0) {
      return res.render('dashboard', { title: 'Dashboard', stats });
    }

    stats.totalSpent = refills.reduce((acc, r) => acc + r.refillCost, 0);

    // totalOdometerDistance and totalFuelQuantity will be calculated differently for overall stats
    // Initialize them here if they are purely sums from refillDetails
    stats.totalOdometerDistance = 0; // This will be sum of trip distances for overall stats
    let totalFuelQuantity = 0; // For overall calculation

    for (let i = 0; i < refills.length; i++) {
      const currentRefill = refills[i];
      const detail = { ...currentRefill }; // Make a copy

      // Calculate fuel quantity for this specific refill
      detail.fuelQuantity = 0;
      if (currentRefill.fuelPrice > 0) {
        detail.fuelQuantity = currentRefill.refillCost / currentRefill.fuelPrice;
      }
      totalFuelQuantity += detail.fuelQuantity; // Accumulate for overall stats

      // Per-refill performance stats using odometerReading as trip distance
      // The 'odometerReading' field from DB is now treated as the trip distance for THIS refill
      const distanceDriven = currentRefill.odometerReading;
      detail.distanceDriven = distanceDriven; // Store the trip distance

      if (distanceDriven > 0) {
        detail.costPerKm = currentRefill.refillCost / distanceDriven;
        if (detail.fuelQuantity > 0) {
          detail.kmPerLitre = distanceDriven / detail.fuelQuantity;
          detail.litrePer100Km = (detail.fuelQuantity / distanceDriven) * 100;
        } else {
          detail.kmPerLitre = 0;
          detail.litrePer100Km = 0;
        }
      } else {
        detail.costPerKm = 0;
        detail.kmPerLitre = 0;
        detail.litrePer100Km = 0;
      }

      // Days since last refill (depends on previous refill)
      if (i > 0) {
        const prevRefill = refills[i-1];
        const prevDate = new Date(prevRefill.date);
        const currentDate = new Date(currentRefill.date);
        const timeDiff = currentDate.getTime() - prevDate.getTime();
        detail.daysSinceLastRefill = Math.round(timeDiff / (1000 * 3600 * 24));
      } else {
        detail.daysSinceLastRefill = 'N/A'; // First refill
      }

      stats.refillDetails.push(detail);
    }

    // Update: Overall stats calculation will be revised in the next step.
    // For now, just ensure totalFuelQuantity is summed correctly.
    // stats.totalOdometerDistance will be the sum of all `detail.distanceDriven`.
    stats.totalOdometerDistance = stats.refillDetails.reduce((acc, r) => acc + (parseFloat(r.distanceDriven) || 0), 0);


    if (stats.totalOdometerDistance > 0 && totalFuelQuantity > 0) {
        stats.overallKmPerLitre = stats.totalOdometerDistance / totalFuelQuantity;
        stats.overallLitrePer100Km = (totalFuelQuantity / stats.totalOdometerDistance) * 100;
    } else {
        stats.overallKmPerLitre = 0;
        stats.overallLitrePer100Km = 0;
    }

    if (stats.totalOdometerDistance > 0 && stats.totalSpent > 0) {
        stats.overallCostPerKm = stats.totalSpent / stats.totalOdometerDistance;
    } else {
        stats.overallCostPerKm = 0;
    }

    // Fetch current fuel price for the modal
    db.get("SELECT currentFuelPrice FROM Settings WHERE id = 1", [], (settingsErr, settingsRow) => {
      let modalFuelPrice = 0.0; // Default value
      if (settingsErr) {
        console.error("Error fetching settings for modal in dashboardController:", settingsErr.message);
        // modalFuelPrice remains 0.0
      } else if (!settingsRow) {
        console.warn("No settings row found (id=1) for modal in dashboardController. Defaulting price to 0.0.");
        // modalFuelPrice remains 0.0
      } else {
        console.log("Fetched currentFuelPrice for modal:", settingsRow.currentFuelPrice);
        modalFuelPrice = settingsRow.currentFuelPrice;
      }
      // The 'stats' object no longer needs 'currentFuelPriceForModal'
      // delete stats.currentFuelPriceForModal; // Optional: explicitly remove if it was ever set on stats

      res.render('dashboard', {
        title: 'Dashboard',
        stats: stats,
        currentFuelPriceForModal: modalFuelPrice // Passed as a top-level variable
      });
    });
  });
};

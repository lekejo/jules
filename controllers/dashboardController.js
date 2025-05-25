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

    if (refills.length > 0) {
        const firstRefillOdo = refills[0].odometerReading;
        const lastRefillOdo = refills[refills.length - 1].odometerReading;
        stats.totalOdometerDistance = lastRefillOdo - firstRefillOdo;
    }
    
    let totalFuelQuantity = 0;

    for (let i = 0; i < refills.length; i++) {
      const currentRefill = refills[i];
      const detail = { ...currentRefill };
      detail.fuelQuantity = 0;

      if (currentRefill.fuelPrice > 0) {
        detail.fuelQuantity = currentRefill.refillCost / currentRefill.fuelPrice;
        totalFuelQuantity += detail.fuelQuantity;
      }

      if (i > 0) {
        const prevRefill = refills[i-1];
        const distanceDriven = currentRefill.odometerReading - prevRefill.odometerReading;
        
        // Days between refills
        const prevDate = new Date(prevRefill.date);
        const currentDate = new Date(currentRefill.date);
        const timeDiff = currentDate.getTime() - prevDate.getTime();
        detail.daysSinceLastRefill = Math.round(timeDiff / (1000 * 3600 * 24));

        if (distanceDriven > 0) {
          detail.distanceDriven = distanceDriven;
          detail.costPerKm = currentRefill.refillCost / distanceDriven;
          
          if (detail.fuelQuantity > 0) {
            detail.kmPerLitre = distanceDriven / detail.fuelQuantity;
            detail.litrePer100Km = (detail.fuelQuantity / distanceDriven) * 100;
          } else {
            detail.kmPerLitre = 0; // Or 'N/A'
            detail.litrePer100Km = 0; // Or 'N/A'
          }
        } else { // distanceDriven is 0 or negative (data error)
          detail.distanceDriven = 0;
          detail.costPerKm = 0;
          detail.kmPerLitre = 0;
          detail.litrePer100Km = 0;
        }
      } else { // First refill
        detail.daysSinceLastRefill = 'N/A';
        detail.distanceDriven = 'N/A';
        detail.costPerKm = 'N/A';
        detail.kmPerLitre = 'N/A';
        detail.litrePer100Km = 'N/A';
      }
      stats.refillDetails.push(detail);
    }

    if (stats.totalOdometerDistance > 0 && totalFuelQuantity > 0) {
        stats.overallKmPerLitre = stats.totalOdometerDistance / totalFuelQuantity;
        stats.overallLitrePer100Km = (totalFuelQuantity / stats.totalOdometerDistance) * 100;
    }
    if (stats.totalOdometerDistance > 0 && stats.totalSpent > 0 && refills.length > 1) {
         // Calculate overall cost per KM based on total spent on refills *after the first one*
         // and total distance driven since the first refill.
         // This is a bit tricky. A simpler overall is total spent / total odo distance if odo starts at 0.
         // Let's use total spent on all refills / total distance covered since first refill.
        stats.overallCostPerKm = stats.totalSpent / stats.totalOdometerDistance;
    }


    // TODO: Pass more specific data for charts if needed, e.g., arrays of values
    res.render('dashboard', { title: 'Dashboard', stats });
  });
};

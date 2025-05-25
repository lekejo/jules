const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse POST request bodies
app.use(express.urlencoded({ extended: true }));

// Require routes
const settingsRoutes = require('./routes/settingsRoutes');
const refillRoutes = require('./routes/refillsRoutes'); // Added
const dashboardRoutes = require('./routes/dashboardRoutes'); // Added

// Mount routes
app.use('/settings', settingsRoutes);
app.use('/refills', refillRoutes); // Added
app.use('/dashboard', dashboardRoutes); // Added

// Define a basic GET route
app.get('/', (req, res) => {
  // res.json({ message: 'Hello World!' }); // Original
  res.render('index', { title: 'Home' }); // Updated to render index.ejs
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

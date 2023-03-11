require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
});

//Import the routes
const Routes = require('./routes');
app.use('/', Routes);


// Start server
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


const express = require('express');
const app = express();

const animalsRoutes = require('./api/routes/animals');
const peopleRoutes = require('./api/routes/people');

app.use('/animals', animalsRoutes)
app.use('/people', peopleRoutes)

module.exports = app;
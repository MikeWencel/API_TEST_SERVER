const express = require('express');
const app = express();
const morgan = require('morgan');

const animalsRoutes = require('./api/routes/animals');
const peopleRoutes = require('./api/routes/people');

app.use(morgan('dev'))

app.use('/animals', animalsRoutes);
app.use('/people', peopleRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message:error.message
        }
    });
});

module.exports = app;
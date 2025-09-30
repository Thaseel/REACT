const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');

const app = express();

app.use('/api/places' , placesRoutes) // --> /api/places/...

app.use((error, req, res, next) => {        // --> Error handler prvided by express.js which is identified with 4 paramters and with no path provided
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message : error.message || 'An unknown error occurred'});
})

app.listen(8000);
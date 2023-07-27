const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;

//use exxpress router
app.use( '/' , require('./routes/index' ));

//Setup ejs and views
app.set( 'view engine' , 'ejs' ); 
app.set('views' , './views' );

app.listen(port, function (err) {
    if (err) {
        console.log('Error:', err);
    }
    console.log("Server is up and running on Port:", port);
});
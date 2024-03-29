const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;

//URL Encoder
app.use(express.urlencoded());

//Setup Layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//Extract styles and scripts from subpages to the alyout
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);


//Setup ejs and views
app.set( 'view engine' , 'ejs' ); 
app.set('views' , './views' );


//use exxpress router
app.use( '/' , require('./routes/index' ));

app.listen(port, function (err) {
    if (err) {
        console.log('Error:', err);
    }
    console.log("Server is up and running on Port:", port);
});
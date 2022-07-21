//adding express
const express = require('express');
const app = express();
// adding body parser 
const bodyParser = require('body-parser');
// const cors = require('cors');
// Port Number information
const port = process.env.PORT || 3000;
// Express ejs layouts
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
// Connecting to the DB
const db = require('./config/mongoose');
const sassMiddleware = require('node-sass-middleware');
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Node Sass Middleware usage block
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(express.urlencoded({extended: true}));
app.use(express.static('./assets'));
// Setting up view engine
app.set('view engine','ejs');
app.set('views', './views');
app.use(expressLayouts);
// extract styles and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use routes
app.use('/', require('./routes/index'));
// Server listening status
app.listen(port, function(err){
    if(err){
        // console.log('Errors', err);
        // interpolation of above statement
        console.log(`Error in running the server : ${err}`);
    }else{
        console.log(`Server is running on the port : ${port}`);
    }
});
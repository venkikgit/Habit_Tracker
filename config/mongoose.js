const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const url = process.env.DATABASE;


const db = mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

//  = mongoose.connection;

// db.on('error',console.error.bind(console,'error connecting to db'));

// db.once('open',function(){
//     console.log('Connected to MongoDB Database');
// })
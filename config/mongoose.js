const mongoose = require('mongoose');

const url = `mongodb+srv://venki:123@habit-cluster.srgrgtj.mongodb.net/?retryWrites=true&w=majority`;


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
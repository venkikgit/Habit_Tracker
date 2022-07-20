const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
// Home Page Controller
const homeController = require('../controllers/home_controller');

router.use(bodyParser.json());


router.get('/', homeController.home);
//habit create routes 
router.post('/create-habit', homeController.createHabit);
// habit deletion routes
router.get('/delete-habit/',homeController.deleteHabit);
// habit full view
router.use('/views',require('./views'));

module.exports = router;
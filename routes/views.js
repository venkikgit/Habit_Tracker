const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
// User controller
const viewsController = require('../controllers/views_controller');

router.use(bodyParser.json());
// Update Habit route
router.post('/update-habit/',viewsController.updateHabit);
// View page controller
router.get('/', viewsController.view);

module.exports = router;
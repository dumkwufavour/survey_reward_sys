const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addReward, getRewards } = require('../controllers/rewardController');

router.post('/add', auth, addReward);
router.get('/', auth, getRewards);

module.exports = router;

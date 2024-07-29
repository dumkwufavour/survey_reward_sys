const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createSurvey, getSurveys, submitSurvey } = require('../controllers/surveyController');

router.post('/create', auth, createSurvey);
router.get('/', auth, getSurveys);
router.post('/submit', auth, submitSurvey);

module.exports = router;

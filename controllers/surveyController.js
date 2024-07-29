const Survey = require('../models/Survey');

exports.createSurvey = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const newSurvey = new Survey({ title, questions });
    const survey = await newSurvey.save();
    res.json(survey);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.submitSurvey = async (req, res) => {
  const { surveyId, answers } = req.body;
  try {
    const survey = await Survey.findById(surveyId);
    if (!survey) {
      return res.status(404).json({ msg: 'Survey not found' });
    }
    const response = { user: req.user.id, answers };
    survey.responses.push(response);
    await survey.save();
    res.json(survey);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

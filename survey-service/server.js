const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const SurveySchema = new mongoose.Schema({
  title: String,
  description: String,
  questions: [String],
  // Add other fields as necessary
});

const Survey = mongoose.model('Survey', SurveySchema);

app.use(express.json());

app.post('/surveys', async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/surveys', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Survey Service running on port ${PORT}`);
});

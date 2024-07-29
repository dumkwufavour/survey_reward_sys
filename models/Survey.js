const mongoose = require('mongoose');
const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [{
    type: String,
    required: true,
  }],
  responses: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    answers: [String],
  }],
});
module.exports = mongoose.model('Survey', SurveySchema);

const mongoose = require('mongoose');
const RewardSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});
module.exports = mongoose.model('Reward', RewardSchema);

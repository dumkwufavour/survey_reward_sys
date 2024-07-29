const Reward = require('../models/Reward');
const User = require('../models/User');

exports.addReward = async (req, res) => {
  const { description, points } = req.body;
  try {
    const newReward = new Reward({ description, points, user: req.user.id });
    const reward = await newReward.save();
    const user = await User.findById(req.user.id);
    user.rewards.push(reward);
    await user.save();
    res.json(reward);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find({ user: req.user.id });
    res.json(rewards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

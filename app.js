const express = require('express');
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/authRoutes');
const surveyRoutes = require('./routes/surveyRoutes');
const rewardRoutes = require('./routes/rewardRoutes');

require('dotenv').config();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/rewards', rewardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

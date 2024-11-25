import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'; // Correct path to user route
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());


app.use('/api/user', userRoutes); // Correctly set up the user routes
app.use('/api/auth',authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

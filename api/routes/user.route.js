import express from 'express';
import { test } from '../controllers/user.controller.js'; // Ensure the file extension

const router = express.Router();

// Define the route
router.get('/test', test);

export default router;

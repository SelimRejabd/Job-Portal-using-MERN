import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getJobById, getJobs, postJob } from '../controllers/job.controller.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/post', isAuthenticated, postJob);

export default router;
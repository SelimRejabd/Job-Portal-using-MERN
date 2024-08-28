import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getJobById, getJobs, postJob, getUserJobs } from '../controllers/job.controller.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/user-jobs/', isAuthenticated, getUserJobs);
router.post('/post', isAuthenticated, postJob);
router.get('/:id', getJobById);

export default router;
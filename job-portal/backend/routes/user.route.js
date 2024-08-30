import express from 'express';
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.post('/login', login);

router.get('/logout', logout);

router.post('/register',singleUpload, register);

router.post('/update', isAuthenticated, updateProfile);

export default router;

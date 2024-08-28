import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationsRoutes from './routes/applications.route.js';

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
};

const port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.use(cors(corsOptions));
app.use('/api/users', userRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationsRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${port}`);
    });

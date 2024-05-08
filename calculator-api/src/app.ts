import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import authRouter from './routes/auth';
import calculatorRouter from './routes/calculator';

import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-handler';
import cors from 'cors';
require('dotenv').config()


const app = express();
app.use(json())
app.use(cors())
// routers
app.use(authRouter);
app.use(calculatorRouter);

// when trying to get not configure routes throw Not found error
app.get('*', async () => {
    throw new NotFoundError();
})
// error middleware
app.use(errorHandler);

export default app;
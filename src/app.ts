import express from 'express';
import type{ Request } from 'express';
import cookieParser from 'cookie-parser';
import taskRouter from './routes/task.route.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import { CsrfProtection } from './services/csrf.js';
dotenv.config()

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Content-Type', 'x-csrf-token']
}))
app.use(bodyParser.json())

app.use(cookieParser())

app.use((req: Request, res, next) => {
  console.log('=== HEADERS RECEIVED ===');
  console.log(`${req.method} ${req.path}`)
  console.log('x-csrf-token:', req.headers['x-csrf-token']);
  console.log('cookies:', JSON.stringify(req.cookies));
  console.log('========================');
  next();
});


//rotas
app.use('/auth', authRouter)
app.use('/task', taskRouter)

export default app





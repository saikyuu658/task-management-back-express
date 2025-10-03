import express from 'express';
import session from 'express-session';
import taskRouter from './routes/task.route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import { csrfProtection } from './services/csrf.js';
dotenv.config()

const app = express();

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'seu-session-secret-aqui',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}))

app.use(express.urlencoded({ extended: true}))
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(bodyParser.json())

app.use(csrfProtection)

//rotas
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use((err: any, req: any, res: any, next: any) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
      error: 'Invalid CSRF token',
      message: 'Token CSRF inválido ou expirado'
    });
  }
  next(err);
});

app.use('/auth', authRouter)
app.use('/task', taskRouter)

export default app





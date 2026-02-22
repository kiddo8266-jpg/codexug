import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://codexug.com',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

// Routes
app.use('/api/contact', contactLimiter, contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'CodexUg API is running' });
});

app.listen(PORT, () => {
  console.log(`CodexUg API server running on port ${PORT}`);
});

export default app;

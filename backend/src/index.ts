import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'CodexUg API is running' });
});

app.listen(PORT, () => {
  console.log(`CodexUg API server running on port ${PORT}`);
});

export default app;

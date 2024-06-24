import express from 'express';
import packRoutes from './routes/packRoutes';

const app = express();

app.use(express.json());
app.use('/api/pack', packRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

export default app;

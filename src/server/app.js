import express from 'express';
import logger from './logger';
import path from 'path';
import authMiddleware from './auth';

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Logged in!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info('Running on port %s', PORT);
});

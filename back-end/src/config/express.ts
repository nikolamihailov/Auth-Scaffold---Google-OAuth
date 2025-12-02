import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.get('/', (_, res) => {
    res.send('working');
  });

  app.listen(PORT, () => {
    console.log(`Server working on ${PORT} port`);
  });
};

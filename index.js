import express from 'express';
import debug from 'debug';

const app = express();
const log = debug('app:main');

app.use(express.json());

// MODULES

app.listen(process.env.PORT, () => {
  log(`Listening on port ${process.env.PORT}`);
});
import express from 'express';
import debug from 'debug';
import InfoApi from './src/info';

const app = express();
const log = debug('app:main');

app.use(express.json());

// MODULES

InfoApi(app);

app.listen(process.env.PORT, () => {
  log(`Listening on port ${process.env.PORT}`);
});
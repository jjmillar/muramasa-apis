import express from 'express';
import { InfoController } from './controller';

const router = express.Router();

export const InfoApi = (app) => {
  router
    .get('/', InfoController.getInfo);

  app.use('/api/info', router);
}
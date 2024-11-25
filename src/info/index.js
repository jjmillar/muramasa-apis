import express from 'express';
import { InfoController } from './controller.js';

const router = express.Router();

export default function InfoApi (app) {
  router
    .get('/', InfoController.getInfo);

  app.use('/api/info', router);
}
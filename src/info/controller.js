import { InfoServices } from './services.js';
import debug from 'debug';

let log = debug('app:module-info-controller');

export const InfoController = {
  getInfo: async (req, res) => {
    try {
      let info = await InfoServices.getAll();
      res.json(info);
    } catch (error) {
      log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
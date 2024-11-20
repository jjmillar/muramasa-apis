import { MongoClient } from 'mongodb';
import debug from 'debug';

const log = debug('app:module-database');

let connection = null;

export const Database = (collection) => new Promise(async (resolve, reject) => {
  try {
    if (!connection) {
      const client = new MongoClient(process.env.MONGO_URI);
      connection = await client.connect();   
      log('Connected to MongoDB');   
    }
    debug('Reutilizing connection');
    const db = connection.db(process.env.MONGO_DBNAME);
    resolve(db.collection(collection));
  } catch (error) {
    reject(error);
  }
});
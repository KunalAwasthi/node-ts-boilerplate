import { string } from 'joi';
import mongoose from 'mongoose';

interface DbOptions {
  host: any,
  db: any,
  user: any,
  pass: any,
  port: any
}

class Db {
  static connect(options:DbOptions) {
    mongoose.connect(`mongodb://${options.user}:${options.pass}@${options.host}:${options.port}/${options.db}?authSource=admin`)
      .then(() => console.log('DB Connected!'))
      .catch((e) => console.log('DB Error', e));
  }

  static getDbOptions():DbOptions {
    return {
      user: process.env.MONGO_USER,
      host: process.env.MONGO_HOST,
      db: process.env.MONGO_DB_NAME,
      pass: process.env.MONGO_PASSWORD,
      port: 27017
    }
  }
}

export default Db;
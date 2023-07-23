import { Sequelize } from "sequelize";
import configs from './config';
const { DB_URL } = configs;

const sequelize = new Sequelize(DB_URL as string, {
  dialect: 'postgres',
  ssl: false
});


const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('connected to database successfully');
  } catch (err: unknown) {
    if(err instanceof Error) {
      console.log('Unable to connect to database', err.message);
    }
    process.exit(1);
  }
};

export {
  connectToDatabase,
  sequelize,
};
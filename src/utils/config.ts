import dotenv from 'dotenv';

dotenv.config();

interface Configs {
  PORT?: string,
  DB_URL?: string
}

const configs : Configs = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL
};

export default configs;
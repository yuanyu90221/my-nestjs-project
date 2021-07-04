import { Sequelize } from 'sequelize-typescript';
import * as dotenv from 'dotenv';
dotenv.config();
export const dataBaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: `${process.env.DB_DOMAIN}`,
        port: Number(`${process.env.DB_PORT}`),
        username: `${process.env.DB_USER}`,
        password: `${process.env.DB_PASSWD}`,
        database: `${process.env.DB_NAME}`
      });
      sequelize.addModels([]);
      return sequelize;
    }
  }
]
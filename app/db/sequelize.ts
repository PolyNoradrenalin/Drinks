import { Sequelize } from 'sequelize-typescript'
import { Cup } from '../model/Cup';

const sequelize = new Sequelize({
  database: 'drinks',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
});

sequelize.addModels([Cup]);

sequelize.sync();

export { sequelize };
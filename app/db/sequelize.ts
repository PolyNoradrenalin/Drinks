import { Sequelize } from 'sequelize-typescript'
import { Cup } from '../model/Cup';
import { Drink } from '../model/Drink';
import { DrinkOrder } from '../model/DrinkOrder';

const sequelize = new Sequelize({
  database: 'db_drinks',
  dialect: 'mysql',
  username: 'root',
  password: 'password',
  define: {
    freezeTableName: true
  }
});

async function initSequelize() {
  sequelize.addModels([Drink, DrinkOrder, Cup]);
  await sequelize.sync({alter: true});
}

export { sequelize, initSequelize };
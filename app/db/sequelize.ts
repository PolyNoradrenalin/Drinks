import { Sequelize } from 'sequelize-typescript'
import { Cup } from '../model/Cup';
import { Drink } from '../model/Drink';
import { DrinkOrder } from '../model/DrinkOrder';
import { Resource } from '../model/Resource';
import { UsesResource } from "../model/UsesResource";

const sequelize = new Sequelize({
  database: 'db_drinks',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  define: {
    freezeTableName: true
  }
});

async function initSequelize() {
  sequelize.addModels([Drink, DrinkOrder, Cup, Resource, UsesResource]);
  await sequelize.sync({alter: true});
}

export { sequelize, initSequelize };
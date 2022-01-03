import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  database: 'drinks',
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  models: [__dirname + '/model']
});

export { sequelize };
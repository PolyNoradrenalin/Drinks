import { sequelize } from "./db/sequelize";

sequelize.databaseVersion().then((databaseVersion) => {
    console.log(databaseVersion);
} );

import { Cup } from "./model/Cup";

let c = new Cup();
c.price = 24;
c.stock = 5;
c.size = 33;

c.save();
import { sequelize } from "./db/sequelize";

sequelize.databaseVersion().then((databaseVersion) => {
    console.log(databaseVersion);
} );

import { Cup } from "./model/Cup";
import { Drink } from "./model/Drink";

let c = new Cup();
c.price = 24;
c.stock = 5;
c.size = 33;

c.save();

let d = new Drink();
d.name = "Coffee";
d.content = "Coffee is an addictive substance that is legal in most countries on Earth.";

d.save();
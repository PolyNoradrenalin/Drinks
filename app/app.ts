import { sequelize, initSequelize } from "./db/sequelize";

sequelize.databaseVersion().then((databaseVersion) => {
    console.log(databaseVersion);
} );

import { Cup } from "./model/Cup";
import { Drink } from "./model/Drink";
import { DrinkOrder } from "./model/DrinkOrder";

initSequelize().then(async () => {
    let c = new Cup();
    c.price = 24;
    c.stock = 5;
    c.size = 33;

    // @ts-ignore
    const d = new Drink({
        name: "Coffee",
        content: "Coffee is an addictive substance that is legal in most countries on Earth.",
        price: 17.20
    });
    await d.save();

    await c.save();
    await c.$create('drinkOrder', {bought_cup: true, canceled: false, price: 25.21});

    let drinkOrder = DrinkOrder.findOne();

    drinkOrder.then(async value => {
        await d.$add("drinkOrders", value);
    });

})
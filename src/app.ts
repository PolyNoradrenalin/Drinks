import "reflect-metadata";
import {createConnection} from "typeorm";
import {Drink} from "./entity/Drink";
import {Cup} from "./entity/Cup";
import {DrinkOrder} from "./entity/DrinkOrder";

createConnection().then(async connection => {

    // We need to save d and c here since I did not set the cascade option in the model's
    // association to DrinkOrder.
    // https://typeorm.io/#/ contains all information needed for all types of relations.

    // TODO: Add documentation to model (Cup, Drink and Resource).

    let d = new Drink();
    d.name = "Fanta";
    d.price = 25.34;
    d.content = "Delicious Fanta, yummy yum yum yummy. I love the taste!"

    await connection.manager.save(d);

    let c = new Cup();
    c.size = 33;
    c.stock = 5;
    c.price = 0.10;

    await connection.manager.save(c);

    let order = new DrinkOrder();
    order.canceled = false;
    order.bought_cup = true;
    order.drink = d;
    order.cup = c;
    // Calculates the price of the order.
    // In the future this should be calculated automatically in the model.
    order.price = order.bought_cup ? d.price - c.price : d.price;

    await connection.manager.save(order);

    // Must close connection or this while run infinitely
    await connection.close();
}).catch(error => console.log(error));

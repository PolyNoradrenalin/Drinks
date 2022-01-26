import "reflect-metadata";
import {createConnection} from "typeorm";
import {Drink} from "./entity/Drink";
import {Cup} from "./entity/Cup";
import {DrinkOrder} from "./entity/DrinkOrder";

createConnection().then(async connection => {

    let d = new Drink();
    d.name = "Fanta";
    d.price = 25.34;
    d.content = "Delicious Fanta, yummy yum yum yummy. I love the taste!"
    console.log("end");

    await connection.manager.save(d);

    let c = new Cup();
    c.size = 33;
    c.stock = 5;
    c.price = 0.10;
    console.log("end");

    await connection.manager.save(c);

    let order = new DrinkOrder();
    order.canceled = false;
    order.bought_cup = true;
    order.drink = d;
    order.cup = c;
    order.price = order.bought_cup ? d.price - c.price : d.price;
    console.log("end");

    await connection.manager.save(order);

    console.log("end");

    await connection.close();
}).catch(error => console.log(error));

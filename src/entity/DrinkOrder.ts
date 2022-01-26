import { Cup } from './Cup';
import { Drink } from './Drink';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

/**
 * Represents a drink order.
 * Associated to a cup and a drink.
 */
@Entity()
export class DrinkOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("boolean")
    canceled: boolean;

    @Column("boolean")
    bought_cup: boolean;

    @Column({
        type: "decimal",
        comment: "Currency in Euros"
    })
    price: number;

    @ManyToOne(type => Cup, cup => cup.orders)
    cup: Cup;

    @ManyToOne(type => Drink, drink => drink.drinkOrders)
    drink: Drink;
}
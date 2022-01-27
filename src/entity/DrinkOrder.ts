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
    public id: number;

    @Column("boolean")
    public canceled: boolean;

    @Column("boolean")
    public bought_cup: boolean;

    // TODO: Calculate price automatically when cup and drink are set.
    @Column({
        type: "decimal",
        comment: "Currency in Euros"
    })
    public price: number;

    @Column({
        type: "decimal",
        comment: "amount of sugar"
    })
    public sugarAmount: number;

    @ManyToOne(() => Cup, cup => cup.orders)
    public cup: Cup;

    @ManyToOne(() => Drink, drink => drink.drinkOrders)
    public drink: Drink;
}
import { DrinkOrder } from './DrinkOrder';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

/**
 * Represents a cup type. Has a price, size and number of remaining cups.
 */
@Entity()
export class Cup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "decimal",
        comment: "Currency in Euros"
    })
    price: number;

    @Column("int")
    stock: number;

    @Column("int")
    size: number;

    @OneToMany(type => DrinkOrder, drinkOrderCup => drinkOrderCup.cup)
    orders: DrinkOrder[];
}
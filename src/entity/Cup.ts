import { DrinkOrder } from './DrinkOrder';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

/**
 * Represents a cup type. Has a price, size and number of remaining cups.
 */
@Entity()
export class Cup {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "decimal",
        comment: "Currency in Euros"
    })
    public price: number;

    @Column("int")
    public stock: number;

    @Column("int")
    public size: number;

    /* istanbul ignore next */
    @OneToMany(/* istanbul ignore next */(/* istanbul ignore next */) => DrinkOrder, /* istanbul ignore next */drinkOrderCup => drinkOrderCup.cup)
    public orders: DrinkOrder[];
}
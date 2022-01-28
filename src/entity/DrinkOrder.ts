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

    @ManyToOne(/* istanbul ignore next */(/* istanbul ignore next */) => Cup, /* istanbul ignore next */cup => cup.orders)
    public cup: Cup;

    @ManyToOne(/* istanbul ignore next */(/* istanbul ignore next */) => Drink, /* istanbul ignore next */drink => drink.drinkOrders)
    public drink: Drink;

    /**
     * Checks if the drink order is valid.
     * if drink, cup, sugarAmount and bought_cup are set, the drink order is valid.
     * @returns {boolean} true if the drink order is valid, false otherwise.
     */
    public isValid() {
        if(this.cup === undefined || this.drink === undefined) {
            return false;
        }
        if(this.cup === null || this.drink === null) {
            return false;
        }
        if(this.sugarAmount < 0 || this.sugarAmount > 5) {
            return false;
        }
        if(this.price < 0 || this.drink.price < 0 || this.cup.price < 0) {
            return false;
        }

        return true;
    }
}
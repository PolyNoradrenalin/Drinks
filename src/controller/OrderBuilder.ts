import {DrinkOrder} from "../entity/DrinkOrder";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";

/**
 * Builder class to create DrinkOrder objects
 */
export class OrderBuilder {

    private _drink : Drink;
    private _cup : Cup;
    private _wantsCup : boolean;
    private _sugarAmount: number;

    /**
     * Sets the drink of the order
     * @param drink The drink to use
     */
    public setDrink(drink : Drink) {
        if(drink == null) {
            throw new Error("Drink cannot be null");
        }
        this._drink = drink;
    }

    /**
     * Sets the cup size used in the order
     * @param cup The cup to use
     */
    public setCup(cup : Cup) {
        if(cup == null) {
            throw new Error("Cup cannot be null");
        }
        this._cup = cup;
    }

    /**
     * Sets the boolean indicating if the order is using a cup or not
     * @param wantsCup True if the order is using a cup, false otherwise
     */
    public setCupChoice(wantsCup : boolean) {
        if(wantsCup == null) {
            throw new Error("Cup choice cannot be null");
        }
        this._wantsCup = wantsCup;
    }

    /**
     * Sets the amount of sugar used in the order
     * @param sugarCount The amount of sugar to use
     */
    public setSugarChoice(sugarCount : number) {
        if(sugarCount == null) {
            throw new Error("Sugar count cannot be null");
        }
        if(sugarCount < 0) {
            throw new Error("Sugar count cannot be negative");
        }
        if(sugarCount > 5) {
            throw new Error("Sugar count cannot be greater than 5");
        }
        this._sugarAmount = sugarCount;
    }


    /**
     * Get a new DrinkOrder object
     * @returns {DrinkOrder} The new DrinkOrder object built
     */
    public getOrder() : DrinkOrder {
        let order = new DrinkOrder();
        order.id = 0;
        order.drink = this._drink;
        order.cup = this._cup;
        order.bought_cup = this._wantsCup;
        order.sugarAmount = this._sugarAmount;
        order.price = this._wantsCup ? this._drink.price * this._cup.size - this._cup.price : this._drink.price * this._cup.size;

        return order;
    }
}
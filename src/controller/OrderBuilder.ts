import {DrinkOrder} from "../entity/DrinkOrder";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";

/**
 * Builder class to create DrinkOrder objects
 */
export class OrderBuilder {

    /**
     * The drink order to be built
     */
    private drinkOrder : DrinkOrder;

    /**
     * Sets the drink of the order
     * @param drink The drink to use
     */
    public setDrink(drink : Drink) {
        throw new Error("Not Implemented");
    }

    /**
     * Sets the cup size used in the order
     * @param cup The cup to use
     */
    public setCup(cup : Cup) {
        throw new Error("Not Implemented");
    }

    /**
     * Sets the boolean indicating if the order is using a cup or not
     * @param wantsCup True if the order is using a cup, false otherwise
     */
    public setCupChoice(wantsCup : boolean) {
        throw new Error("Not Implemented");

    }

    /**
     * Sets the amount of sugar used in the order
     * @param sugarCount The amount of sugar to use
     */
    public setSugarChoice(sugarCount : number) {
        throw new Error("Not Implemented");

    }

    /**
     * Get a new DrinkOrder object
     * @returns {DrinkOrder} The new DrinkOrder object built
     */
    public getOrder() : DrinkOrder {
        throw new Error("Not Implemented");
    }
}
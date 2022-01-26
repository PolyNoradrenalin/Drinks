import {IService} from '../service/IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {OrderBuilder} from "./OrderBuilder";
import {DrinkOrder} from "../entity/DrinkOrder";

/**
 * Controller used to handle a drink order.
 */
export class OrderController {

    /**
     * The service used to handle the database.
     */
    private service : IService

    /**
     * The list of drinks.
     */
    private drinks : Drink[];

    /**
     * The list of cups.
     */
    private cups : Cup[];

    /**
     * The list of resources.
     */
    private resources : Resource[];

    /**
     * The builder used to build the final order.
     */
    private orderBuilder : OrderBuilder;


    constructor(service : IService) {
        this.service = service;
    }

    /**
     * Start the order process, getting the information using the service, then the user choices.
     */
    public startOrder() : void {
        throw new Error("Not Implemented");
    }

    /**
     * Get the list of drinks and ask the view to choose one.
     * @returns {Drink} The drink chosen by the user.
     */
    private getDrinkSelection() : Drink {
        throw new Error("Not Implemented");
    }

    /**
     * Get the list of cup size and ask the view to choose one.
     * @returns {Cup} The cup/cup size chosen by the user.
     */
    private getSizeSelection() : Cup {
        throw new Error("Not Implemented");
    }

    /**
     * Get the choice of using a cup or not.
     * @returns {boolean} True if we want to use a cup, false otherwise.
     */
    private getCupChoice() : boolean {
        throw new Error("Not Implemented");
    }

    /**
     * Get the amount of sugar to add to the drink.
     * @returns {number} The amount of sugar to add.
     */
    private getSugarChoice() : number {
        throw new Error("Not Implemented");
    }

    /**
     * Gets the choice of confirming or cancelling the order.
     * This will also check if the given order is correct (all fields are correct)
     * @returns {boolean} True if we want to confirm the order, false otherwise.
     */
    private getConfirmation(order : DrinkOrder) : boolean {
        throw new Error("Not Implemented");
    }
}
import {IService} from '../service/IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {OrderBuilder} from "./OrderBuilder";
import {DrinkOrder} from "../entity/DrinkOrder";
import {ConsoleView} from "../view/view";

/**
 * Controller used to handle a drink order.
 */
export class OrderController {

    /**
     * The service used to handle the database.
     */
    private service : IService

    /**
     * The view used by the controller to interact with the user.
     */
    private view : ConsoleView;

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


    constructor(service : IService, view : ConsoleView) {
        this.service = service;
        this.view = view;
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
    public getDrinkSelection(drinks : Drink[]) : Drink {
        if (drinks == null)
            throw new Error("List of drinks is uninitialized.");

        if (drinks.length === 0)
            throw new Error("List of drinks is empty.");

        let choices = new Map<string, Drink>();
        drinks.forEach((drink) => {
            choices.set(drink.name, drink);
        });

        return this.view.choiceQuestion<Drink>("Which drink do you want ?", choices);
    }

    /**
     * Get the list of cup size and ask the view to choose one.
     * @returns {Cup} The cup/cup size chosen by the user.
     */
    public getSizeSelection() : Cup {
        throw new Error("Not Implemented");
    }

    /**
     * Get the choice of using a cup or not.
     * @returns {boolean} True if we want to use a cup, false otherwise.
     */
    public getCupChoice() : boolean {
        throw new Error("Not Implemented");
    }

    /**
     * Get the amount of sugar to add to the drink.
     * @returns {number} The amount of sugar to add.
     */
    public getSugarChoice() : number {
        throw new Error("Not Implemented");
    }

    /**
     * Gets the choice of confirming or cancelling the order.
     * This will also check if the given order is correct (all fields are correct)
     * @returns {boolean} True if we want to confirm the order, false otherwise.
     */
    public getConfirmation(order : DrinkOrder) : boolean {
        throw new Error("Not Implemented");
    }
}
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
     * @param drinks List of all drinks in the machine.
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
     * @param cups List of available sizes of drinks.
     * @returns {Cup} The cup/cup size chosen by the user.
     */
    public getSizeSelection(cups : Cup[]) : Cup {
        if (cups == null)
            throw new Error("Cup list is uninitialized");

        if (cups.length === 0)
            throw new Error("Cup list is empty");

        let choices = new Map<string, Cup>();
        cups.forEach(cup => {
            choices.set("Size " + cup.size, cup);
        });

        return this.view.choiceQuestion<Cup>("What cup size do you want ?", choices);
    }

    /**
     * Get the choice of using a cup or not.
     * @param cup Chosen size for the drink.
     * @returns {boolean} True if we want to use a cup, false otherwise or if there's not any cup left.
     */
    public getCupChoice(cup : Cup) : boolean {
        throw new Error("Not Implemented");
    }

    /**
     * Get the amount of sugar to add to the drink.
     * @param sugar Resource object of sugar.
     * @returns {number} The amount of sugar to add.
     */
    public getSugarChoice(sugar : Resource) : number {
        throw new Error("Not Implemented");
    }

    /**
     * Gets the choice of confirming or cancelling the order.
     * This will also check if the given order is correct
     * @param order The order waiting for the confirmation (all fields except the confirmation state are correct)
     * @returns {boolean} True if we want to confirm the order, false otherwise.
     */
    public getConfirmation(order : DrinkOrder) : boolean {
        throw new Error("Not Implemented");
    }
}
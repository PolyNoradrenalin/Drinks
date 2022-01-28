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
     * The maximum sugar level allowed to the user (inclusive).
     */
    public readonly MAXIMUM_SUGAR : number = 5;

    /**
     * The unit to display to the user for the sugar quantity.
     * @private
     */
    private readonly SUGAR_UNIT : string = "g";

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
        if(cup == null)
            throw new Error("Cup is null.");
        if(cup.stock <= 0){
            this.view.displayMessage("There's no cup left for this size, defaulting to \"using my own cup\".");
            return false;
        }

        return this.view.yesNoQuestion("Do you want to use a cup ?");
    }

    /**
     * Get the amount of sugar to add to the drink.
     * @param sugar Resource object of sugar.
     * @param max Maximum sugar level allowed
     * @returns {number} The amount of sugar to add.
     */
    public getSugarSelection(sugar : Resource, max : number = this.MAXIMUM_SUGAR) : number {
        if (sugar == null)
            throw new Error("Sugar resource is uninitialized.");

        if (sugar.name_resource.toLowerCase() !== "sugar")
            throw new Error("Given resource (" + sugar.name_resource + ") is not sugar.");

        if (sugar.stock_resource === 0) {
            this.view.displayMessage("There's no sugar left in the machine, you will be able to cancel the order at the end.");
            return 0;
        }

        let choices = new Map<string, number>();
        for (let s = 0; s <= max; s++) {
            choices.set(s + this.SUGAR_UNIT, s);
        }

        return this.view.choiceQuestion("What sugar level do you want ?", choices);
    }

    /**
     * Gets the choice of confirming or cancelling the order.
     * This will also check if the given order is correct
     * @param order The order waiting for the confirmation (all fields except the confirmation state are correct)
     * @returns {boolean} True if we want to confirm the order, false otherwise.
     */
    public getConfirmation(order : DrinkOrder) : boolean {
        if(order == null)
            throw new Error("Order is null.");

        if(!order.isValid())
            throw new Error("Order is not valid.");

        this.view.displayMessage("Here's a summary of your order :");
        this.view.displayMessage("Drink : " + order.drink.name);
        this.view.displayMessage("Size : " + order.cup.size);
        this.view.displayMessage("Buying a cup : " + (order.bought_cup ? "Yes" : "No"));
        this.view.displayMessage("Sugar : " + order.sugarAmount);

        return this.view.yesNoQuestion("Do you want to confirm your order ?");
    }
}
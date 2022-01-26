import {IService} from '../service/IService';
import {TypeORMService} from "../service/TypeORMService";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {OrderBuilder} from "./OrderBuilder";

/**
 * Controller used to handle a drink order.
 */
export class OrderController{

    /**
     * The service used to handle the database.
     */
    service: IService = new TypeORMService();

    /**
     * The list of drinks.
     */
    drinks: Drink[];

    /**
     * The list of cups.
     */
    cups: Cup[];

    /**
     * The list of resources.
     */
    resources: Resource[];

    /**
     * The builder used to build the final order.
     */
    orderBuilder: OrderBuilder;


    /**
     * Get the list of drinks and ask the view to choose one.
     * @returns {Drink} The drink chosen by the user.
     */
    getDrinkSelection(): Drink{
        throw new Error("Not Implemented");
    }

    /**
     * Get the list of cup size and ask the view to choose one.
     * @returns {Cup} The cup/cup size chosen by the user.
     */
    getSizeSelection(): Cup{
        throw new Error("Not Implemented");
    }

    /**
     * Get the choice of using a cup or not.
     * @returns {boolean} True if we want to use a cup, false otherwise.
     */
    getCupChoice(): boolean{
        throw new Error("Not Implemented");
    }

    /**
     * Get the amount of sugar to add to the drink.
     * @returns {number} The amount of sugar to add.
     */
    getSugarChoice(): number{
        throw new Error("Not Implemented");
    }

    /**
     * Get the choice of confirming or cancelling the order.
     * @returns {boolean} True if we want to confirm the order, false otherwise.
     */
    getConfirmation(): boolean{
        throw new Error("Not Implemented");
    }

    /**
     * Start the order process, getting the information using the service, then the user choices.
     */
    startOrder(): void{
        throw new Error("Not Implemented");
    }
}
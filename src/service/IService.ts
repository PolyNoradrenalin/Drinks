import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";
import {UpdateResult} from "typeorm";

/**
 * Interface for the service layer. Used to access the database.
 */
export interface IService {

    /**
     * Returns all drinks of the database.
     * @returns {Drink[]}  The existing drinks.
     */
    getAllDrinks(): Promise<Drink[]>;

    /**
     * Returns all cups of the database.
     * @returns {Cup[]}  The existing cups.
     */
    getAllCups(): Promise<Cup[]>;

    /**
     * Returns all resources of the database.
     * @returns {Resource[]}  The existing resources.
     */
    getAllResources(): Promise<Resource[]>;

    /**
     * Save a drink order to the database.
     * @param drinkOrder The order to save.
     */
    save(drinkOrder : DrinkOrder): Promise<DrinkOrder>;

    /**
     * Saves a resource to the database.
     * @param resource Resource to be saved.
     */
    saveResource(resource : Resource): Promise<Resource>;

    /**
     * Saves a cup to the database.
     * @param cup Cup to be saved.
     */
    saveCup(cup : Cup): Promise<Cup>;

    /**
     * Update the quantity of a cup resource.
     * @param cup The cup to update.
     */
    updateCupStock(cup : Cup): Promise<UpdateResult>;

    /**
     * Update the quantity of a drink resource like sugar or water.
     * @param resource The resource to update.
     */
    updateResourceStock(resource : Resource): Promise<UpdateResult>;
}
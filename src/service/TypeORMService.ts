import {IService} from './IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";

/**
 * @interface
 * Interface for the service layer. Used to access the database.
 * Uses TypeORM to access the database.
 */
export class TypeORMService implements IService {

    /**
     * @inheritDoc IService#getAllDrinks
     */
    public getAllDrinks(): Drink[] {
        throw new Error("Not Implemented");
    }

    /**
     * @inheritDoc IService#getAllCups
     */
    public getAllCups(): Cup[] {
        throw new Error("Not Implemented");
    }

    /**
     * @inheritDoc IService#getAllResources
     */
    public getAllResources(): Resource[] {
        throw new Error("Not Implemented");
    }

    /**
     * @inheritDoc IService#save
     */
    public save(drinkOrder: DrinkOrder): void {
        throw new Error("Not Implemented");
    }

    /**
     * Update the quantity of a cup resource.
     * @param cup The cup to update.
     */
    public update(cup: Cup): void;
    /**
     * Update the quantity of a drink resource like sugar or water.
     * @param resource The resource to update.
     */
    public update(resource: Resource): void;
    public update(obj: Cup | Resource): void {
        throw new Error("Not Implemented");
        if (obj instanceof Cup) {
            console.log('update cup');
        } else if (obj instanceof Resource) {
            console.log('update resource');
        }
    }

}
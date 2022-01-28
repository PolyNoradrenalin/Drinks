import {IService} from './IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";
import {getConnection, Connection} from "typeorm";

/**
 * @interface
 * Interface for the service layer. Used to access the database.
 * Uses TypeORM to access the database.
 */
export class TypeORMService implements IService {

    /**
     * @inheritDoc IService#getAllDrinks
     */
    public getAllDrinks(): Promise<Drink[]> {
        return this.getServiceConnection().manager.find(Drink);
    }

    /**
     * @inheritDoc IService#getAllCups
     */
    public getAllCups(): Promise<Cup[]> {
        return this.getServiceConnection().manager.find(Cup);
    }

    /**
     * @inheritDoc IService#getAllResources
     */
    public getAllResources(): Promise<Resource[]> {
        return this.getServiceConnection().manager.find(Resource);
    }

    /**
     * @inheritDoc IService#save
     */
    public save(drinkOrder: DrinkOrder): void {
        this.getServiceConnection().manager.save<DrinkOrder>(drinkOrder);
    }

    /**
     * Update the quantity of a cup resource.
     * @param cup The cup to update.
     */
    public updateStock(cup: Cup): void;
    /**
     * Update the quantity of a drink resource like sugar or water.
     * @param resource The resource to update.
     */
    public updateStock(resource: Resource): void;
    public updateStock(obj: Cup | Resource): void {
        if (obj instanceof Cup) {
            this.getServiceConnection()
                .createQueryBuilder()
                .update(Cup)
                .set({stock: obj.stock})
                .where("id = :id", {id: obj.id})
                .execute();
        } else if (obj instanceof Resource) {
            this.getServiceConnection()
                .createQueryBuilder()
                .update(Resource)
                .set({stock_resource: obj.stock_resource})
                .where("id = :id", {id: obj.id})
                .execute();
        }
    }

    private getServiceConnection() : Connection{
        return getConnection();
    }
}
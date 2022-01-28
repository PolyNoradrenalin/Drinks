import {IService} from './IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";
import {getConnection, Connection, UpdateResult, createConnection} from "typeorm";
import {posix} from "path";

/**
 * @interface
 * Interface for the service layer. Used to access the database.
 * Uses TypeORM to access the database.
 */
export class TypeORMService implements IService {
    /**
     * @inheritDoc IService#getAllDrinks
     */
    public getAllDrinks() : Promise<Drink[]> {
        return this.getServiceConnection().manager.find(Drink);
    }

    /**
     * @inheritDoc IService#getAllCups
     */
    public getAllCups() : Promise<Cup[]> {
        return this.getServiceConnection().manager.find(Cup);
    }

    /**
     * @inheritDoc IService#getAllResources
     */
    public getAllResources() : Promise<Resource[]> {
        return this.getServiceConnection().manager.find(Resource);
    }

    /**
     * @inheritDoc IService#save
     */
    public save(drinkOrder : DrinkOrder) : Promise<DrinkOrder> {
        return this.getServiceConnection().manager.save<DrinkOrder>(drinkOrder);
    }

    /**
     * @inheritDoc IService#saveResource
     */
    public saveResource(resource : Resource) : Promise<Resource> {
        return this.getServiceConnection().manager.save<Resource>(resource);
    }

    /**
     * Update the quantity of a cup resource.
     * @param cup The cup to update.
     */
    public updateCupStock(cup : Cup) : Promise<UpdateResult> {
        return this.getServiceConnection()
            .createQueryBuilder()
            .update(Cup)
            .set({stock : cup.stock})
            .where("id = :id", {id : cup.id})
            .execute();
    }

    /**
     * Update the quantity of a drink resource like sugar or water.
     * @param resource The resource to update.
     */
    public updateResourceStock(resource : Resource) : Promise<UpdateResult> {
        return this.getServiceConnection()
            .createQueryBuilder()
            .update(Resource)
            .set({stock_resource : resource.stock_resource})
            .where("id = :id", {id : resource.id})
            .execute();
    }

    private getServiceConnection() : Connection {
        return getConnection();
    }
}
import {IService} from './IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";

// TODO: fix this to be a TypeORM service instead
// TODO: documentation
export class SequelizeService implements IService {
    getAllCups(): Cup[] {
        throw new Error("Not Implemented");
    }

    getAllDrinks(): Drink[] {
        throw new Error("Not Implemented");
    }

    getAllResources(): Resource[] {
        throw new Error("Not Implemented");
    }

    save(drinkOrder: DrinkOrder): void {
        throw new Error("Not Implemented");
    }

    update(cup: Cup): void;
    update(resource: Resource): void;
    update(cup: Cup | Resource): void {
        throw new Error("Not Implemented");
        if (cup instanceof Cup) {
            console.log('update cup');
        } else if (cup instanceof Resource) {
            console.log('update resource');
        }
    }

}
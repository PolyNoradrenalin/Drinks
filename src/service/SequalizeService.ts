import {IService} from './IService';
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";

// TODO: fix this to be a TypeORM service instead
// TODO: documentation
export class SequelizeService implements IService {
    getAllCups(): Cup[] {
        return [];
    }

    getAllDrinks(): Drink[] {
        return [];
    }

    getAllResources(): Resource[] {
        return [];
    }

    save(drinkOrder: DrinkOrder): void {
    }

    update(cup: Cup): void;
    update(resource: Resource): void;
    update(cup: Cup | Resource): void {
        if (cup instanceof Cup) {
            console.log('update cup');
        } else if (cup instanceof Resource) {
            console.log('update resource');
        }
    }

}
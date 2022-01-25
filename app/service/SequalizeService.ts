import {IService} from './IService';
import {Drink} from "../model/Drink";
import {Cup} from "../model/Cup";
import {Resource} from "../model/Resource";
import {DrinkOrder} from "../model/DrinkOrder";
import {sequelize, initSequelize} from "../db/sequelize";

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
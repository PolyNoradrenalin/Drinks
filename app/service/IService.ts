import {Drink} from "../model/Drink";
import {Cup} from "../model/Cup";
import {Resource} from "../model/Resource";
import {DrinkOrder} from "../model/DrinkOrder";

export interface IService {
    getAllDrinks(): Drink[];
    getAllCups(): Cup[];
    getAllResources(): Resource[];
    save(drinkOrder : DrinkOrder): void;
    update(cup: Cup): void;
    update(resource: Resource): void;
}
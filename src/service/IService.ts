import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {DrinkOrder} from "../entity/DrinkOrder";

// TODO: documentation
export interface IService {
    getAllDrinks(): Drink[];
    getAllCups(): Cup[];
    getAllResources(): Resource[];
    save(drinkOrder : DrinkOrder): void;
    update(cup: Cup): void;
    update(resource: Resource): void;
}
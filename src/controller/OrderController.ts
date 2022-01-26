import {IService} from '../service/IService';
import {SequelizeService} from "../service/SequalizeService";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";
import {Resource} from "../entity/Resource";
import {OrderBuilder} from "./OrderBuilder";

// TODO: documentation
export class OrderController{

    service: IService = new SequelizeService();
    drinks: Drink[];
    cups: Cup[];
    resources: Resource[];
    orderBuilder: OrderBuilder;


    getDrinkSelection(): Drink{
        throw new Error("Not Implemented");
    }

    getSizeSelection(): Cup{
        throw new Error("Not Implemented");
    }

    getCupChoice(): boolean{
        throw new Error("Not Implemented");
    }

    getSugarChoice(): number{
        throw new Error("Not Implemented");
    }

    getConfirmation(): boolean{
        throw new Error("Not Implemented");
    }

    startOrder(): void{
        throw new Error("Not Implemented");
    }
}
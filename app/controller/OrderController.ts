import {IService} from '../service/IService';
import {SequelizeService} from "../service/SequalizeService";
import {Drink} from "../model/Drink";
import {Cup} from "../model/Cup";
import {Resource} from "../model/Resource";
import {OrderBuilder} from "./OrderBuilder";



export class OrderController{

    service: IService = new SequelizeService();
    drinks: Drink[];
    cups: Cup[];
    resources: Resource[];
    orderBuilder: OrderBuilder;


    getDrinkSelection(): Drink{
        return new Drink();
    }

    getSizeSelection(): Cup{
        return new Cup();
    }

    getCupChoice(): boolean{
        return true;
    }

    getSugarChoice(): number{
        return 1;
    }

    getConfirmation(): boolean{
        return true;
    }

    startOrder(): void{

    }
}
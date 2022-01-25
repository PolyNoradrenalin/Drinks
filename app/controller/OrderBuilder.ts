import {DrinkOrder} from "../model/DrinkOrder";
import {Drink} from "../model/Drink";
import {Cup} from "../model/Cup";


export class OrderBuilder{
    drinkOrder: DrinkOrder;

    setDrink(drink: Drink){

    }

    setCup(cup: Cup){

    }

    setCupChoice(wantsCup: boolean){

    }

    setSugarChoice(sugarCount: number){

    }

    getOrder(): DrinkOrder{
        return this.drinkOrder;
    }

}
import {DrinkOrder} from "../entity/DrinkOrder";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";

// TODO: documentation
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
import {DrinkOrder} from "../entity/DrinkOrder";
import {Drink} from "../entity/Drink";
import {Cup} from "../entity/Cup";

// TODO: documentation
export class OrderBuilder{
    drinkOrder: DrinkOrder;

    setDrink(drink: Drink){
        throw new Error("Not Implemented");
    }

    setCup(cup: Cup){
        throw new Error("Not Implemented");

    }

    setCupChoice(wantsCup: boolean){
        throw new Error("Not Implemented");

    }

    setSugarChoice(sugarCount: number){
        throw new Error("Not Implemented");

    }

    getOrder(): DrinkOrder{
        throw new Error("Not Implemented");
    }

}
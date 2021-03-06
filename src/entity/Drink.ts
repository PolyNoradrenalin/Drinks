import { DrinkOrder } from './DrinkOrder';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Drink {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 30
    })
    public name: string;

    @Column({
        length: 200
    })
    public content: string;

    @Column({
        type: "decimal",
        comment: "Currency in Euros"    
    })
    public price: number;

    @OneToMany(/* istanbul ignore next */(/* istanbul ignore next */) => DrinkOrder, /* istanbul ignore next */drinkOrderDrink => drinkOrderDrink.drink)
    public drinkOrders: DrinkOrder[];

}
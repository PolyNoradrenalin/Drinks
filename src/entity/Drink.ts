import { DrinkOrder } from './DrinkOrder';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Drink {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 30
    })
    name: string;

    @Column({
        length: 200
    })
    content: string;

    @Column({
        type: "decimal",
        comment: "Currency in Euros"    
    })
    price: number;

    @OneToMany(type => DrinkOrder, drinkOrderDrink => drinkOrderDrink.drink)
    drinkOrders: DrinkOrder[];

}
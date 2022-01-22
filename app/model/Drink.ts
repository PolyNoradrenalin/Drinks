import {Table, Column, Model, PrimaryKey, DataType, BelongsToMany, HasMany} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';

@Table
export class Drink extends Model<Drink> {
    // Attributes
    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    content: string;

    @Column({
        type: DataType.DECIMAL,
        comment: "Currency in Euros"    
    })
    price: number;

    @HasMany(() => DrinkOrder)
    drinkOrders: DrinkOrder[] = new Array();

}
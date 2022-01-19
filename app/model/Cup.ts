import {Table, Column, Model, DataType, HasOne, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';

/**
 * Represents a cup type. Has a price, size and number of remaining cups.
 */
@Table
export class Cup extends Model<Cup> {
    @Column({
        type: DataType.DECIMAL,
        comment: "Currency in Euros"
    })
    price: number;

    @Column(DataType.INTEGER)
    stock: number;

    @Column(DataType.INTEGER)
    size: number;

    @HasMany(() => DrinkOrder)
    drinkOrder: DrinkOrder[] = [];
}
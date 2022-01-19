import {Table, Column, Model, PrimaryKey, HasOne, DataType, BelongsTo, ForeignKey, BelongsToMany} from 'sequelize-typescript';
import { Cup } from './Cup';
import { Drink } from './Drink';
import { Resource } from './Resource';

/**
 * Represents a drink order.
 * Contains a cup and a drink.
 */
@Table
export class DrinkOrder extends Model<DrinkOrder> {
    @Column(DataType.TINYINT)
    canceled: boolean;

    @Column(DataType.TINYINT)
    bought_cup: boolean;

    @Column({
        type: DataType.DECIMAL,
        comment: "Currency in Euros"
    })
    price: number;

    @BelongsTo(() => Cup)
    cup: Cup;

    @ForeignKey(() => Cup)
    cupId: number;

    @BelongsTo(() => Drink)
    drink: Drink;

    @ForeignKey(() => Drink)
    drinkId: number;
}
import {Table, Column, Model, PrimaryKey, HasOne, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Cup } from './Cup';
import { Drink } from './Drink';

@Table
export class DrinkOrder extends Model<DrinkOrder> {
    @Column(DataType.TINYINT)
    private canceled!: boolean;

    @Column(DataType.TINYINT)
    private bought_cup_order!: boolean;

    @BelongsTo(() => Cup)
    private size!: number;

    @ForeignKey(() => Cup)
    private cupId!: number;

    @BelongsTo(() => Drink)
    private drink!: Drink;

    @ForeignKey(() => Drink)
    private drinkId!: number;
}
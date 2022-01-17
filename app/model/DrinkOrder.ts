import {Table, Column, Model, PrimaryKey, HasOne, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript';
import { Cup } from './Cup';
import { Drink } from './Drink';

/**
 * Represents a drink order.
 * Contains a cup and a drink.
 */
@Table
export class DrinkOrder extends Model<DrinkOrder> {
    @Column(DataType.TINYINT)
    private _canceled!: boolean;

    @Column(DataType.TINYINT)
    private _bought_cup!: boolean;

    @BelongsTo(() => Cup)
    size!: Cup;

    @ForeignKey(() => Cup)
    cupId!: number;

    @BelongsTo(() => Drink)
    drink!: Drink;

    @ForeignKey(() => Drink)
    drinkId!: number;

    public get canceled(): boolean {
        return this._canceled;
    }
    public set canceled(value: boolean) {
        this._canceled = value;
    }

    public get bought_cup(): boolean {
        return this._bought_cup;
    }
    public set bought_cup(value: boolean) {
        this._bought_cup = value;
    }
}
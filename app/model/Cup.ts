import {Table, Column, Model, DataType, HasOne, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';

/**
 * Represents a cup type. Has a price, size and number of remaining cups.
 */
@Table
export class Cup extends Model<Cup> {
    // Attributes
    @Column({
        type: DataType.DECIMAL,
        comment: "Currency in Euros"
    })
    private _price!: number;

    @Column(DataType.INTEGER)
    private _stock!: number;

    @Column(DataType.INTEGER)
    private _size!: number;

    @HasMany(() => DrinkOrder)
    _drinkOrder!: DrinkOrder[];

    // Accessors
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }

    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }

    public get drinkOrder(): DrinkOrder[] {
        return this._drinkOrder;
    }
    public set drinkOrder(value: DrinkOrder[]) {
        this._drinkOrder = value;
    }
}
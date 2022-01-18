import {Table, Column, Model, PrimaryKey, DataType, BelongsToMany, HasMany} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';

@Table
export class Drink extends Model<Drink> {
    // Attributes
    @Column(DataType.STRING)
    private _name!: string;

    @Column(DataType.STRING)
    private _content!: string;

    @Column({
        type: DataType.DECIMAL,
        comment: "Currency in Euros"    
    })
    private _price!: number;

    @HasMany(() => DrinkOrder)
    _drinkOrders!: DrinkOrder[];

    // Accessors
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
}
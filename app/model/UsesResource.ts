import {Table, Column, Model, PrimaryKey, ForeignKey} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';
import { Resource } from './Resource';

@Table
export class UsesResource extends Model<UsesResource> {
    @ForeignKey(() => Resource)
    @Column
    private _resourceId: number;
    
    @ForeignKey(() => DrinkOrder)
    @Column
    private _drinkOrderId: number;

    @Column
    private _quantityUsed! : number;

    public get resourceId(): number {
        return this._resourceId;
    }
    public set resourceId(value: number) {
        this._resourceId = value;
    }

    public get drinkOrderId(): number {
        return this._drinkOrderId;
    }
    public set drinkOrderId(value: number) {
        this._drinkOrderId = value;
    }

    get quantityUsed(): number {
        return this._quantityUsed;
    }

    set quantityUsed(value: number) {
        this._quantityUsed = value;
    }
}
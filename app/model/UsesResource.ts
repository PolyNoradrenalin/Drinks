import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
export class UsesResource extends Model<UsesResource> {

    @PrimaryKey @Column
    private _id_resource! : number;

    @PrimaryKey @Column
    private _id_order! : number;

    @Column
    private _quantityUsed! : number;


    get id_resource(): number {
        return this._id_resource;
    }

    set id_resource(value: number) {
        this._id_resource = value;
    }

    get id_order(): number {
        return this._id_order;
    }

    set id_order(value: number) {
        this._id_order = value;
    }

    get quantityUsed(): number {
        return this._quantityUsed;
    }

    set quantityUsed(value: number) {
        this._quantityUsed = value;
    }
}
import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
export class Resource extends Model<Resource> {
    @Column
    private _name_resource! : string;

    @Column
    private _stock_resource! : number;


    get name_resource(): string {
        return this._name_resource;
    }

    set name_resource(value: string) {
        this._name_resource = value;
    }

    get stock_resource(): number {
        return this._stock_resource;
    }

    set stock_resource(value: number) {
        this._stock_resource = value;
    }
}
import {Table, Column, Model, PrimaryKey, BelongsToMany} from 'sequelize-typescript';
import { DrinkOrder } from './DrinkOrder';

@Table
export class Resource extends Model<Resource> {
    @Column
    name_resource: string;

    @Column
    stock_resource: number;
}
import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
class Resource extends Model<Resource> {
    @Column @PrimaryKey
    id_resource!: number;

    @Column
    name_resource!: string;

    @Column
    stock_resource!: number;

}
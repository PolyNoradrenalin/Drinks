import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class Resource extends Model<Resource> {
    @Column @PrimaryKey
    private id_resource! : number;

    @Column
    private name_resource! : string;

    @Column
    private stock_resource! : number;
}
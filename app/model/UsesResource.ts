import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class UsesResource extends Model<UsesResource> {
    @Column @PrimaryKey
    private id_order! : number;

    @Column
    private quantityUsed! : number;
}
import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
class UsesResource extends Model<UsesResource> {
    @Column @PrimaryKey
    id_resource!: number;

    @Column @PrimaryKey
    id_order!: number;

    @Column
    quantityUsed!: number;

}
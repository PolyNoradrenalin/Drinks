import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class Cup extends Model<Cup> {
    @Column @PrimaryKey
    id_cup!: number;

    @Column
    price_cup!: number;

    @Column
    stock_cup!: number;

    @Column
    size!: number;
}
import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class Cup extends Model<Cup> {
    @Column @PrimaryKey
    private id_cup! : number;

    @Column
    private price_cup! : number;

    @Column
    private stock_cup! : number;

    @Column
    private size! : number;
}
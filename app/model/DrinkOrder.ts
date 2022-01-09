import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class DrinkOrder extends Model<DrinkOrder> {
    @Column
    private canceled! : boolean;

    @Column
    private bought_cup_order! : boolean;

    @Column
    private size! : number;

    @Column
    private id_drink! : number;
}
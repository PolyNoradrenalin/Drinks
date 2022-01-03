import { Table, Column, Model, PrimaryKey  } from 'sequelize-typescript';

@Table
class DrinkOrder extends Model<DrinkOrder> {
    @Column @PrimaryKey
    id_order!: number;

    @Column
    canceled!: boolean;

    @Column
    bought_cup_order!: boolean;

    @Column
    size : number;

    @Column
    id_drink!: number;

}
import { Table, Column, Model, PrimaryKey  } from 'sequelize-typescript';

@Table
class Drink extends Model<Drink> {
    @Column @PrimaryKey
    id_drink!: number;

    @Column
    name_drink!: string;

    @Column
    content_drink!: string;

    @Column
    price_drink!: number;

}
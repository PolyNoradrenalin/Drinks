import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class Drink extends Model<Drink> {
    @Column
    private name_drink! : string;

    @Column
    private content_drink! : string;

    @Column
    private price_drink! : number;
}
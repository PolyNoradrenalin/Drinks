import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';

@Table
class CupSize extends Model<CupSize> {
    @Column @PrimaryKey
    private size! : number;
}
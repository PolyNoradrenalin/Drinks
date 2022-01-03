import { Table, Column, Model } from 'sequelize-typescript';

@Table
class CupSize extends Model<CupSize> {
    @Column
    private size!: number;
}
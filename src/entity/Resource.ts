import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Resource {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name_resource: string;

    @Column()
    public stock_resource: number;
}
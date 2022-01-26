import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Resource {
    @PrimaryColumn()
    public id: number;

    @Column()
    public name_resource: string;

    @Column()
    public stock_resource: number;
}
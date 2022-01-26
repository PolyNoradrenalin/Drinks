import { DrinkOrder } from './DrinkOrder';
import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Resource {
    @PrimaryColumn()
    id: number;

    @Column()
    name_resource: string;

    @Column()
    stock_resource: number;
}
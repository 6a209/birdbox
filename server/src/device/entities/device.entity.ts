import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    serial: string;

    @Column()
    desc: string;
}

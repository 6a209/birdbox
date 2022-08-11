import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bind {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid: number;

    @Column()
    deviceId: number;

}

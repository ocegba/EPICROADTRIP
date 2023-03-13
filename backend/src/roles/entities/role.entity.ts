import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    UserId: string;

    @Column()
    ParcoursId: string;

    @Column()
    DisLike: boolean;
}

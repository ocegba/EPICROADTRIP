import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    UserId: string;

    @Column()
    ParcoursId: string;

    @Column()
    Like: boolean;
}

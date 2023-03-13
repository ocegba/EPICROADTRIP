import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dislike {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    Name: string;
}

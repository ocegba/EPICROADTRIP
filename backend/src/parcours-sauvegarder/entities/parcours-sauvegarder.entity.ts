import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParcoursSauvegarder {
    @PrimaryGeneratedColumn()
    Id: string;

    @Column()
    UserId: string;

    @Column()
    Adresse: string;

    @Column()
    Drink: boolean;

    @Column()
    Eat: boolean;

    @Column()
    Travel: boolean;

    @Column()
    Sleep: boolean;
    
    @Column()
    Enjoy: boolean;
}
